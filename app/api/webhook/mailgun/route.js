import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { sendEmail } from "@/libs/mailgun";
import config from "@/config";

// This route is used to receive emails from Mailgun and forward them to our customer support email.
// See more: https://shipfa.st/docs/features/emails
export async function POST(req) {
  try {
    // console.log("HEADER---");
    // const headersList = headers();
    // console.log(headersList);
    // console.log(JSON.stringify(headersList));
    // console.log(headersList.get("Content-Type"));
    // console.log("HEADER---");
  } catch (e) {
    console.log("ERROR", e);
  }
  // const body = await req.json();

  try {
    // extract the email content, subject and sender
    const formData = await req.formData();
    console.log("formData", formData);
    console.log("formData", JSON.stringify(formData));

    const sender = formData.get("From");
    const subject = formData.get("Subject");
    const html = formData.get("body-html");

    // send email to the admin if forwardRepliesTo is et & emailData exists
    if (config.mailgun.forwardRepliesTo && html && subject && sender) {
      await sendEmail({
        to: config.mailgun.forwardRepliesTo,
        subject: `${config?.appName} | ${subject}`,
        // text: `Subject: ${subject}\n\nFrom: ${sender}\n\nContent:\n${strippedText}`,
        html: `<div><p>Subject: ${subject}</p><p>From: ${sender}</p><p>Content:</p><p>${html}</p></div>`,
        replyTo: sender,
      });
    }

    return NextResponse.json({});
  } catch (e) {
    console.error(e?.message);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}
