require("dotenv").config();
const express = require("express");
const router = express.Router();
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
  console.log(req.body.email);
  let mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `zac party rsvp from: ${req.body.name}`,
    html: `
    <h4>${req.body.name} is attending: ${req.body.rsvp ? "yep!" : "too bad"}</h4>
    <p>email: <a href="mailto:${req.body.email}">${req.body.email}</a></p>
    <p>notes: ${req.body.message}</p>
    `,
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("error: " + err);
    } else {
      console.log("email sent!");
      res.json({ status: "email sent" });
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
