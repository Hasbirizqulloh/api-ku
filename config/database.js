import { Sequelize } from 'sequelize';

const db = new Sequelize('dbs_pelma', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
});

export default db;
