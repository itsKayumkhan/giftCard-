const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b87b7a7fd70ddb",
      pass: "91e79d99b24064",
    },
    // host: process.env.SMTP_SERVICE,
    // port:process.env.SMTP_PORT,
    // auth: {
    //   user: process.env.SMTP_MAIL,
    //   pass: process.env.SMTP_PASSWORD,
    // },
  });

  const mailOptions = {
    from: "tempm6659@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
sendContact = async (req, res) => {
  const data = req.body;
  console.log(data)
  const transporter = nodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b87b7a7fd70ddb",
      pass: "91e79d99b24064",
    },
    // host: process.env.SMTP_SERVICE,
    // port:process.env.SMTP_PORT,
    // auth: {
    //   user: process.env.SMTP_MAIL,
    //   pass: process.env.SMTP_PASSWORD,
    // },
  });

  const mailOptions = {
    from: "tempm6659@gmail.com",
    to:data.email,
    subject: data.subject,
    text: data.message,
    html:`
    <p>Name: ${data.name}</p>
    <p>Address: ${data.address}</p>
    <p>Phone number: ${data.phoneNo}</p>
  `,
   
  };

   transporter.sendMail(mailOptions, (err) => {
    if (!err) res.json({ success: true, message: "Message Successfully Send" })
    else throw res.json({success:false});
  });
};

module.exports = {sendEmail,sendContact};
