const nodemailer = require('nodemailer');
const EmailsTemplates = require('../emails-templates');

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.PASS_USER,
  },
});

const sendEmail = async(data, type, message) => {
  if (type === 'recover-password') {
    const linkRecoverPassword = `${process.env.LOGIN_ADMIN_URL}/token-recover-password/${data.idToken}`;
    const mailOptions = {
      from: 'Remitente',
      to: data.email,
      subject: 'Asunto NODE JS',
      html: EmailsTemplates.recoverPassword(linkRecoverPassword),
    };

    const response = await transport.sendMail(mailOptions)
        .then(() => {
          return {
            status: 200,
            message: 'email sent successfully',
          };
        })
        .catch((e) => {
          return {
            status: 500,
            message: error.message,
          };
        });
    return response;
  }
};

module.exports = { sendEmail };
