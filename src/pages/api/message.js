import nodemailer from "nodemailer";
import { POST } from "../../utils/methods";

const post = (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // send mail with defined transport object
  let send = transporter.sendMail({
    from: "Portfolio <info@jonacius-villamor.com>",
    to: "contact@jonacius-villamor.com",
    subject: `[Contact] A Message from ${name}`,
    text: message,
    html: `<p>${message}</p>`,
  });

  send
    .then((result) => {
      res.status(200);
    })
    .catch((err) => {
      res.status(500);
    });
};

export default function handler(req, res) {
  if (req.method === POST) {
    // NOTE: Not yet integrated in prod, needs middleware to prevent DDOS.
    return post(req, res);
  }

  res.status(404).json({ message: "API route not found." });
}
