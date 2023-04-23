const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");

const app = express();
const http = require("http");
const server = http.createServer(app);

const cors = require("cors");
const port = 8000;

const connection = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL");
});

// Middleware pour gérer les requêtes JSON
app.use(bodyParser.json());

// Middleware pour éviter les problèmes de CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Lancement du serveur Node.js
app.listen(port, () => {
  console.log(`Serveur Node.js écoutant sur le port ${port}`);
});
