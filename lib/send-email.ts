'use serer';
import nodemailer from 'nodemailer';
const TWISTO_PUBLIC_EMAIL_HOST = process.env.TWISTO_PUBLIC_EMAIL_HOST;
const TWISTO_PUBLIC_APP_USERNAME = process.env.TWISTO_PUBLIC_APP_USERNAME;
const TWISTO_PUBLIC_APP_PASSWORD = process.env.TWISTO_PUBLIC_APP_PASSWORD;
const TWISTO_PUBLIC_EMAIL_RECEIVER = process.env.TWISTO_PUBLIC_EMAIL_RECEIVER;
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: TWISTO_PUBLIC_EMAIL_HOST,
  port: 587,
  secure: true,
  auth: {
    user: TWISTO_PUBLIC_APP_USERNAME,
    pass: TWISTO_PUBLIC_APP_PASSWORD,
  },
});

export async function sendSubscriberData({
  email,
  subject,
  text,
  html,
}: {
  email: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error(
      'Something Went Wrong',
      TWISTO_PUBLIC_APP_USERNAME,
      TWISTO_PUBLIC_APP_PASSWORD,
      error
    );
    return;
  }
  const info = await transporter.sendMail({
    from: email,
    to: TWISTO_PUBLIC_EMAIL_RECEIVER,
    subject: subject,
    text: text,
    html: html ? html : '',
  });
  console.log('Message Sent', info.messageId);
  console.log('Mail sent to', TWISTO_PUBLIC_EMAIL_RECEIVER);
  return info;
}
