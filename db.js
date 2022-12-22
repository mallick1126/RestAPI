/* Importing the Pool class from the pg module. */
const Pool = require('pg').Pool;

/* This is creating a new pool of connections to the database. */
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "Rahul123@",
    port: 5432,
});



module.exports = pool;