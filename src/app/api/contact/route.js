import { NextResponse } from "next/server";
import mail from "@sendgrid/mail";

// Set the SendGrid API key
mail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req) {
  try {
    const body = await req.json(); // ✅ Correct for App Router

    const message = `
      <p>Inquiry Form</p>
      <p><strong>First Name:</strong> ${body.firstName}</p>
      <p><strong>Last Name:</strong> ${body.lastName}</p>
      <p><strong>Email Address:</strong> ${body.emailAddress}</p>
      <p><strong>Phone Number:</strong> ${body.phoneNumber}</p>
      <p><strong>What solution you are looking for?:</strong> ${body.subject}</p>
      <p><strong>Message:</strong> ${body.message}</p>
      <br>
      <i>This email was sent from Inquiry Form on <a href="https://www.osbpo.com//contact-us">Ocean Space</a></i>
    `;

    const data = {
      to: "enquiries@osbpo.com",
      from: "noreply@twg2c2p.com",
      subject: "Inquiry Form",
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    };

    await mail.send(data);

    return NextResponse.json({
      status: "success",
      message: "Your message was sent successfully.",
    });
  } catch (error) {
    console.error(
      "SendGrid Error:",
      error.response ? error.response.body : error
    );

    return NextResponse.json(
      { status: "error", message: `Message failed: ${error.message}` },
      { status: 500 }
    );
  }
}
