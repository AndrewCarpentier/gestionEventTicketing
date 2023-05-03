const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ticketing",
});

// const connection = mysql.createConnection({
//     host: "sql7.freemysqlhosting.net",
//     user: "sql7613830",
//     password: "kitZ6tz6zs",
//     database: "sql7613830",
// });

connection.connect((err) => {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL");
});

module.exports = connection;