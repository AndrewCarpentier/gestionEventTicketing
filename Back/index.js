const bodyParser = require("body-parser");
const express = require("express");
const cookie = require("cookie-parser");
const routes = require("./routes");
const app = express();
const http = require("http");
const server = http.createServer(app);

require("./database");
const cors = require("cors");
const port = 8000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// const { google } = require("googleapis");
// const keyfile = require("./keyfile.json");
// const auth = new google.auth.GoogleAuth({
//   credentials: keyfile,
//   scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
// });
// console.log({auth})
// const analyticsreporting = google.analyticsreporting({
//   version: "v4",
//   auth: auth,
// });
// async function fetchData() {
//   try {
//     const response = await analyticsreporting.reports.batchGet({
//       requestBody: {
//         reportRequests: [
//           {
//             viewId: "5385497955",
//             dimensions: [{ name: "audienceId" }],
//             metrics: [
//               { expression: "active1DayUsers" },
//               { expression: "active7DayUsers" },
//               { expression: "activeUsers" },
//               { expression: "newUsers" },
//             ],
//             dateRanges: [{ startDate: "30daysAgo", endDate: "yesterday" }],
//           },
//         ],
//       },
//     });

//     console.log(response.data);
//   } catch (error) {
//     console.error("Error fetching data from Google Analytics:", error);
//   }
// }

// fetchData();
app.use(cookie());

app.use(bodyParser.json());

app.use(routes);

app.use("*", (req, res) => {
  res.status(400).end();
});

// Lancement du serveur Node.js
app.listen(port, () => {
  console.log(`Serveur Node.js écoutant sur le port ${port}`);
});
