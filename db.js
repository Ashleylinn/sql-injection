//connct node.js to postgresql
const { Client } = require('pg');

const client = new Client({
  user: "postgres",         
  host: "localhost",
  database: "sql_injection_demo",
  password: "my_password", 
  port: 5432
});

client.connect();

module.exports = client;
