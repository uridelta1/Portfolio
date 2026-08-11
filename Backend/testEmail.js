require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function main() {
  try {
    const info = await transporter.sendMail({
      from: `"Test" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: "Test Email",
      text: "This is a test email.",
    });
    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.error("Error occurred:", err.message);
    console.error(err);
  }
}

main();
