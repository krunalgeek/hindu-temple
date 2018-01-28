
import { createTransport, getTestMessageUrl } from 'nodemailer';
const transporter = createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'w2rmjq7vmkwzvtvq@ethereal.email',
    pass: 'utYzgfAUdY2cAetN1K'
  }
});
const mailDelivery = (mailOptions) => {

  // create reusable transporter object using the default SMTP transport
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
};


export default mailDelivery;
