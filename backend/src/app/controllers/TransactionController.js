import { startOfMonth, endOfMonth } from 'date-fns';
import { Op } from 'sequelize';
import * as Yup from 'yup';
import Transaction from '../models/Transaction';
import Category from '../models/Category';
import Total from '../models/Total';

import getBalance from '../../util/getBalance';

class TransactionController {
  async index(req, res) {
    const { page = 1, per_page = 12 } = req.query;

    const date = new Date();

    const transactionValidate = await Transaction.findAll({
      where: {
        user_id: req.userId,
        created_at: {
          [Op.between]: [startOfMonth(date), endOfMonth(date)],
        },
      },
    });

    const balances = getBalance(transactionValidate);

    const total = await Transaction.count();

    const transaction = await Transaction.findAll({
      where: {
        user_id: req.userId,
      },
      order: [['created_at', 'DESC']],
      limit: per_page,
      offset: (page - 1) * per_page,
      include: [
        {
          model: Category,
          as: 'category',
        },
      ],
    });

    const { value } = await Total.findOne({
      where: { user_id: req.userId },
    });

    const balance = {
      ...balances,
      total: value,
    };

    const next = Number(page) + 1;
    const last_page = Number((total / per_page).toFixed(0));

    if (next > last_page && Number(page) > last_page) {
      return res.status(404).json({ error: 'Página não encontrada' });
    }

    const pagination = {
      first_page: 1,
      next: Number(next > last_page ? next - 1 : next),
      last_page,
      total,
    };

    return res.json({
      transaction,
      pagination,
      balance,
    });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      value: Yup.number().required(),
      type: Yup.string().required(),
      // category: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na Validação' });
    }

    if (!['income', 'outcome'].includes(req.body.type)) {
      return res.status(401).json({ error: 'Transição inválida' });
    }

    // let totalId = {};

    let total = await Total.findOne({
      where: { user_id: req.userId },
    });

    if (!total) {
      total = await Total.create({
        user_id: req.userId,
        value: 0,
      });
    }

    // const transaction = await Transaction.findAll({
    //   where: { user_id: req.userId },
    //   attributes: ['value', 'type'],
    // });

    // const { total } = getBalance(transaction);

    // if (req.body.type === 'outcome' && total < req.body.value) {
    //   return res.status(400).json({ error: 'Saldo insuficiente' });
    // }

    let category = await Category.findOne({
      where: { id: req.body.category.id, user_id: req.userId },
    });

    if (!category) {
      category = await Category.create({
        title: req.body.category,
        user_id: req.userId,
      });
    }

    const { id, title, value, type } = await Transaction.create({
      title: req.body.title,
      value: req.body.value.toFixed(2),
      type: req.body.type,
      category_id: category.id,
      user_id: req.userId,
    });

    let totalValue = 0;

    if (type === 'income') {
      totalValue = total.value + Number(value);
    } else {
      totalValue = total.value - Number(value);
    }

    await total.update({
      value: totalValue,
    });

    return res.json({ id, title, value, type });
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
