import Sequelize from 'sequelize';

import User from '../app/models/User';
import Transaction from '../app/models/Transaction';
import Category from '../app/models/Category';
import File from '../app/models/File';
import Total from '../app/models/Total';

import databaseConfig from '../config/database';

const models = [User, Transaction, Category, File, Total];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
