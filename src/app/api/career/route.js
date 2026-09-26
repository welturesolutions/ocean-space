import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ACCEPTED_EXTENSIONS = ["pdf", "doc", "docx"];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const isAcceptedFile = (file) => {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";

  return (
    ACCEPTED_EXTENSIONS.includes(extension) &&
    (file.type === "" || ACCEPTED_TYPES.includes(file.type))
  );
};

export async function POST(req) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const emailAddress = formData.get("emailAddress");
    const phoneNumber = formData.get("phoneNumber");
    const country = formData.get("country");
    const resume = formData.get("resume");

    if (
      !firstName ||
      !lastName ||
      !emailAddress ||
      !phoneNumber ||
      !country ||
      !resume
    ) {
      return NextResponse.json(
        { status: "error", message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!isAcceptedFile(resume)) {
      return NextResponse.json(
        {
          status: "error",
          message:
            "Invalid file type. Please upload a .pdf, .doc, or .docx file.",
        },
        { status: 400 },
      );
    }

    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          status: "error",
          message: "File is too large. Maximum file size is 5 MB.",
        },
        { status: 400 },
      );
    }

    const resumeBytes = Buffer.from(await resume.arrayBuffer());

    const message = `
      <p>Career Application</p>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email Address:</strong> ${emailAddress}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Country:</strong> ${country}</p>
      <br>
      <p><strong>Resume/CV:</strong> ${resume.name}</p>
      <br>
      <i>This email was sent from Career Application Form on <a href="https://www.osbpo.com/career">Ocean Space</a></i>
    `;

    await resend.emails.send({
      to: "enquiries@osbpo.com",
      from: "enquiries@osbpo.com",
      subject: `Career Application from ${firstName} ${lastName}`,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
      attachments: [
        {
          filename: resume.name,
          content: resumeBytes,
        },
      ],
    });

    return NextResponse.json({
      status: "success",
      message: "Your application was submitted successfully.",
    });
  } catch (error) {
    console.error(
      "Resend Error:",
      error.response ? error.response.body : error,
    );

    return NextResponse.json(
      { status: "error", message: `Application failed: ${error.message}` },
      { status: 500 },
    );
  }
}
