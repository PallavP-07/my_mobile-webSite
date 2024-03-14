import nodemailer from "nodemailer";
import { NextResponse } from 'next/server';
export async function POST(request) {
  // Check if the request method is POST
    try {
      // Parse the request body
      const { name, email, message } = await request.json();
      // Create a Nodemailer transporter object
      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "cydney.wyman35@ethereal.email",
          pass: "aSeg3yywgFvMfeV53w",
        },
      });
      // Send mail with defined transport object
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: "demoacc6272@gmail.com",
        subject: "New Message from Contact Form",
        text: message,
      });
      // Send a success response
      return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
      // Send an error response
      return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
  } 
  