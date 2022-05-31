require("dotenv").config();
const express = require("express");
// const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
const publicPath = path.join(__dirname, "./build");

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// mailer logic
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PW,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err ? console.log(err) : console.log(`ready for messages : ${success}`);
});

// app.use('/', router);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(publicPath));
}

// route to send emails
app.post("/rsvp", (req, res) => {
  console.log("sending...");

  console.log(req.body);
  let mailOptions = {
    from: req.body.details.email,
    to: process.env.EMAIL,
    subject: `zac party rsvp from: ${req.body.details.name}`,
    html: `
    <h4>${req.body.details.name} is attending: ${req.body.details.rsvp ? "yep!" : "too bad"}</h4>
    <p>email: <a href="mailto:${req.body.details.email}">${req.body.details.email}</a></p>
    <p>notes: ${req.body.details.message}</p>
    `,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("error: " + err);
    } else {
      console.log("email sent!");
      res.json({ status: "thanks for letting Lelah know the deets!" });
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
