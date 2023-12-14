import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

const db = new Sequelize('dbs_pelma', 'faikar', 'dfasofd08', {
  host: 'faikarmoht.my.id',
  dialect: 'mysql',
  dialectModule: mysql2,
});

export default db;
