import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

const db = new Sequelize('dbs_pelma', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: mysql2,
});

export default db;
