import nodemailer from 'nodemailer';

const sendVerificationEmail = async (email, otp) => {
    console.log("Preparing to send email to:", email, "with OTP:", otp);
    console.log("Using email:", process.env.EMAIL);
    
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"abcwebsite" <${process.env.EMAIL}>`,
      to: email,
      subject: "Verify your OTP",
      text: `Your OTP is: ${otp}`,
      html: `Your OTP is: <b>${otp}</b>`,
    });

    console.log("Message sent:", info.messageId);
    return true;

  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
};

export default sendVerificationEmail;
