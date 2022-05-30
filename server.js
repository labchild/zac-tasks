const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");


const PORT = process.env.PORT || 3001;
const app = express();
const publicPath = path.join(__dirname, "./public");

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use('/', router);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(publicPath));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(`${publicPath}/index.html`));
});

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
