// const express = require("express");
// const MessageModel = require("../model/Message");

// const router = express.Router();

// router.post("/", async function (req, res) {
//   const { name, email, message } = req.body;

//   if (!name || !email || !messages) {
//     return res.status(400).json({
//       message: "name ,email, message are required",
//       error: "name ,email, message are required",
//     });
//   }

//   try {
//     await MessageModel.create({
//       name,
//       email,
//       message,
//     });

//     const transporter = nodemailer.createTransport({
//   service: "gmail", // or your SMTP provider
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// if (process.env.CONTACT_TO_EMAIL) {
//   await transporter.sendMail({
//     from: `"${name}" <${process.env.EMAIL_USER}>`,
//     to: process.env.CONTACT_TO_EMAIL,
//     replyTo: email,
//     subject: `Portfolio Contact from ${name}`,
//     text: `From: ${name} <${email}>\n\n${message}`,
//     html: `
//       <h2>New Portfolio Contact</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Message:</strong></p>
//       <p>${message.replace(/\n/g, "<br>")}</p>
//     `,
//   });

//   console.log("Email sent successfully.");
// } else {
//   console.warn(
//     "[contact] CONTACT_TO_EMAIL not set — email not sent, message saved to DB only."
//   );
// }
//   res.status(201).json({ ok: true });

//   } catch (err) {
//     console.error("[contact] Error:", err.message);
//     res.status(500).json({ error: "Failed to send message" });
//   }
// });

// module.exports = router;
const express = require("express");
const nodemailer = require("nodemailer"); // ← missing require, will crash
const MessageModel = require("../model/Message");

const router = express.Router();

router.post("/", async function (req, res) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) { // ← was `messages` (typo, undefined var)
    return res.status(400).json({
      message: "name ,email, message are required",
      error: "name ,email, message are required",
    });
  }

  try {
    try {
      await MessageModel.create({ name, email, message });
    } catch (dbErr) {
      console.warn("[contact] DB Save failed, but continuing to send email:", dbErr.message);
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });



// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: process.env.EMAIL_USER,
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     refreshToken: process.env.REFRESH_TOKEN,
//   },
// });

    if (process.env.CONTACT_TO_EMAIL) {
await transporter.sendMail({
  from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
  to: process.env.CONTACT_TO_EMAIL,
  replyTo: email, // Visitor's email
  subject: `New Portfolio Contact from ${name}`,
  html: `
    <h2>New Contact Message</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>

    <p>${message.replace(/\n/g, "<br>")}</p>
  `,
});
//       await transporter.sendMail({
//   from: `"${name}" <${process.env.EMAIL_USER}>`,
//   to: process.env.CONTACT_TO_EMAIL,
//   replyTo: email,
//   subject: `Portfolio Contact from ${name}`,
//   text: `From: ${name} <${email}>\n\n${message}`,
// });
      console.log("Email sent successfully.");
    } else {
      console.warn("[contact] CONTACT_TO_EMAIL not set — email not sent, message saved to DB only.");
    }

    res.status(201).json({ ok: true });
  } catch (err) {
    console.error("[contact] Error:", err.message);
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;