const bodyParser = require("body-parser");
const express = require("express");
const cookie = require("cookie-parser");
const routes = require("./routes");
const app = express();
const http = require("http");
const server = http.createServer(app);

require('./database');
const cors = require("cors");
const port = 8000;
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions))

// Middleware pour gérer les requêtes JSON
app.use(bodyParser.json());
app.use(routes);
app.use(cookie());
// Middleware pour éviter les problèmes de CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use('*', (req, res)=>{
  res.status(400).end();
})

// Lancement du serveur Node.js
app.listen(port, () => {
  console.log(`Serveur Node.js écoutant sur le port ${port}`);
});
