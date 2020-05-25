import Sequelize, { Model } from 'sequelize';

class Total extends Model {
  static init(sequelize) {
    super.init(
      {
        value: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

export default Total;
