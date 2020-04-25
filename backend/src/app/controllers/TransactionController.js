import * as Yup from 'yup';
import Transaction from '../models/Transaction';
import Category from '../models/Category';

import getBalance from '../../util/getBalance';

class TransactionController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const transactionValidate = await Transaction.findAll({
      where: { user_id: req.userId },
    });

    const balance = getBalance(transactionValidate);

    const transaction = await Transaction.findAll({
      where: { user_id: req.userId },
      order: ['created_at'],
      limit: 10,
      offset: (page - 1) * 10,
      include: [
        {
          model: Category,
          as: 'category',
        },
      ],
    });

    return res.json({
      transaction,
      balance,
    });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      value: Yup.number().required(),
      type: Yup.string().required(),
      category: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na Validação' });
    }

    if (!['income', 'outcome'].includes(req.body.type)) {
      return res.status(401).json({ error: 'Transição inválida' });
    }

    const transaction = await Transaction.findAll({
      where: { user_id: req.userId },
      attributes: ['value', 'type'],
    });

    const { total } = getBalance(transaction);

    if (req.body.type === 'outcome' && total < req.body.value) {
      return res.status(400).json({ error: 'Saldo insuficiente' });
    }

    let category = await Category.findOne({
      where: { title: req.body.category, user_id: req.userId },
    });

    if (!category) {
      category = await Category.create({
        title: req.body.category,
        user_id: req.userId,
      });
    }

    const { id, title, value, type } = await Transaction.create({
      title: req.body.title,
      value: req.body.value,
      type: req.body.type,
      category_id: category.id,
      user_id: req.userId,
    });

    return res.json({ id, title, value, type, category: category.title });
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res
          .status(404)
          .json({ error: 'Id não encontrado nos parametros' });
      }

      const transaction = await Transaction.findByPk(id);

      if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada' });
      }

      await transaction.destroy();

      return res.status(204).json();
    } catch (err) {
      return res.status(500).json({ error: `Falha ao deletar: ${err}` });
    }
  }
}

export default new TransactionController();
