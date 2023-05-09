const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

async function send(token, mail) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "andr3wcarpentier@gmail.com",
      pass: "lmebtehgfblqhvxb",
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  const handlebarOptions = {
    viewEngine:  {
      partialsDir:  path.resolve('./utils/views/'),
      defaultLayout:  false
    },
    viewPath:  path.resolve('./utils/views/'),
  };

  transporter.use('compile', hbs(handlebarOptions));

  const mailOptions = {
    from: "andr3wcarpentier@gmail.com",
    to: mail,
    subject: "EVENTMASTER reset password",
    template: "email",
  
    context: {
      name: mail,
      token : token
    }
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = send;
