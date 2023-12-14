import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

// const db = new Sequelize('dbs_pelma', 'faikar', 'dfasofd08', {
//   host: 'faikarmocht.my.id',
//   dialect: 'mysql',
//   dialectModule: mysql2,
// });

const db = new Sequelize('mysql://faikar:Gaadaygtau100%23@149.28.139.38:3306/dbs_pelma?connection_limit=10&connectiontimeout=30000', {
  dialectModule: mysql2,
});

export default db;
