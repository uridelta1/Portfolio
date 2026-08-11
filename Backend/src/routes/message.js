const express = require("express");
const nodemailer = require("nodemailer");
const MessageModel = require("../model/Message");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: "Name, email, and message are required",
    });
  }

  try {
    // Save message to MongoDB
    try {
      await MessageModel.create({
        name,
        email,
        message,
      });

      console.log("[contact] Message saved to MongoDB");
    } catch (dbErr) {
      console.error("[contact] MongoDB save failed:", dbErr.message);
    }

    // If email settings aren't configured, don't try to send email
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.CONTACT_TO_EMAIL
    ) {
      console.warn(
        "[contact] Email environment variables are missing."
      );

      return res.status(201).json({
        ok: true,
        message: "Message received successfully",
      });
    }

    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      // Prevent the request from hanging forever
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Send email
    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.CONTACT_TO_EMAIL,
        replyTo: email,
        subject: `New Portfolio Contact from ${name}`,

        text: `
Name: ${name}
Email: ${email}

Message:
${message}
        `,

        html: `
          <h2>New Portfolio Contact</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message.replace(/\n/g, "<br>")}
          </p>
        `,
      });

      console.log("[contact] Email sent successfully");
    } catch (emailErr) {
      // Email failure should NOT make the contact form fail
      console.error(
        "[contact] Email sending failed:",
        emailErr.message
      );
    }

    // Always return success after message is processed
    return res.status(201).json({
      ok: true,
      message: "Message received successfully",
    });
  } catch (err) {
    console.error("[contact] Error:", err);

    return res.status(500).json({
      ok: false,
      error: "Failed to process message",
    });
  }
});

module.exports = router;