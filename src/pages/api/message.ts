import nodemailer from "nodemailer";
import { POST } from "../../utils/methods";

export default function handler(req, res) {
  if (req.method !== POST) {
    res.status(404).json({ message: "API route not found." });
  }

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
  transporter
    .sendMail({
      from: "Portfolio <info@jonacius-villamor.com>",
      to: "contact@jonacius-villamor.com",
      subject: `[Contact] A Message from ${name}`,
      text: message,
      html: `<div>
      <p>email: ${email}</p>
      <p>${message}</p>
      </div>`,
    })

    .then(() => {
      res.status(200).end();
    })
    .catch(() => {
      res.status(500).end();
    });
}
