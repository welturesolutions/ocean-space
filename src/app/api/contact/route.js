import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    await resend.emails.send({
      to: "enquiries@osbpo.com",
      from: "enquiries@osbpo.com",
      subject: "Inquiry Form",
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });

    return NextResponse.json({
      status: "success",
      message: "Your message was sent successfully.",
    });
  } catch (error) {
    console.error(
      "Resend Error:",
      error.response ? error.response.body : error,
    );

    return NextResponse.json(
      { status: "error", message: `Message failed: ${error.message}` },
      { status: 500 },
    );
  }
}
