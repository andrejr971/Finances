import Category from '../models/Category';

class CategoryController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const category = await Category.findAll({
      where: { user_id: req.userId },
      attributes: ['id', 'title'],
      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(category);
  }

  async store(req, res) {
    const { title } = req.body;

    const categoryExist = await Category.findOne({
      where: { title, user_id: req.userId },
    });

    if (categoryExist) {
      return res.status(401).json({ error: 'Categoria já existe' });
    }

    const category = await Category.create({
      title,
      user_id: req.userId,
    });

    return res.json(category);
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res
          .status(404)
          .json({ error: 'Id não encontrado nos parametros' });
      }

      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }

      await category.destroy();

      return res.status(204).json();
    } catch (err) {
      return res.status(500).json({ error: `Falha ao deletar: ${err}` });
    }
  }
}

export default new CategoryController();
