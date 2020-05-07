const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f9bd64cce224fe",
      pass: "fd0f4a7df427dc"
    }
  })

