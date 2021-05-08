const sgMail = require("@sendgrid/mail");
const { text } = require("express");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = function (email, name) {
  sgMail.send({
    to: email,
    from: "karanthniranjan6@gmail.com",
    subject: "Thanks for joining us",
    text: `Welcome to the app, ${name}. Let me know how to get along with the app !`,
  });
};

const cancelMail = function (email, name) {
  sgMail.send({
    to: email,
    from: "karanthniranjan6@gmail.com",
    subject: "Account remove confirmation !",
    text: `Goodbye ${name} ! Is there anything we could've done to kept you on board ?`,
  });
};

module.exports = {
  sendMail,
  cancelMail,
};
