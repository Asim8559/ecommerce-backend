import { Sequelize } from 'sequelize';
import config from '../config/config.js';

const env = 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

const db = {
  sequelize,
  Sequelize,
};

export default db;
