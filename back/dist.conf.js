const mysql = require('mysql');

const connection = mysql.createConnection({
  host: ``,
  user: ``,
  password: ``,
  database: ``
});

const Transporter = {
  user: '',
  pass: ''
};

module.exports = { Transporter, connection };
