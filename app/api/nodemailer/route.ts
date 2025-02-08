import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: any) {
  const { email,firstName,lastName,phone,msg } = await req.json();

  console.log("EMAIL:", process.env.EMAIL);
  console.log("PASS:", process.env.PASS ? "Exists" : "Not found");
    let transporter = nodemailer.createTransport({
      secure: true,
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

  try {
        let info = await transporter.sendMail({
          from: process.env.EMAIL,
          to: process.env.EMAIL,
          subject: "NEW REQUEST FROM WEBSITE",
          text: `Email: ${email} \n First Name: ${firstName} \n last Name: ${lastName} \n Phone: ${phone} \n\n\n Message: ${msg}`,
        });

        console.log(`message sent: ${info.messageId}`);
    // res.status(200).json({ success: true });
    return NextResponse.json({message: "Email sent Successfully!"},{status: 200});
  } catch (error: any) {
    console.log(`error in sending email: ${error}`);
    // res.status(500).json({ success: false, error: error.message });

    return NextResponse.json({ success: false, error: error.message }, {status: 500});

  }
}
