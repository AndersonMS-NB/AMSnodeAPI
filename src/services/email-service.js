'use strict';
var config = require('../config');
var sendgrid = require('sendgrid')(config.sendgridKey);
const sgMail = require('@sendgrid/mail')

exports.send = async (to, from, text, subject, body) => {

    sgMail.setApiKey(config.sendgridKey)
    const msg = {
      to: to, 
      from: from , 
      subject: subject,
      text: text,
      html: body,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email enviado com Sucesso !')
      })
      .catch((error) => {
        console.error(error)
      })
}