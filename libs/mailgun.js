import config from "@/config";
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

export const sendEmail = async (to, subject, text, html, replyTo) => {
  const data = {
    from: `Marc at WorkbookPDF <${config.email.fromMe}>`,
    to: [to],
    subject,
    text,
    html,
    ...(replyTo && { "h:Reply-To": replyTo }),
  };

  await mg.messages.create(
    (config.mailgun.subdomain ? `${config.mailgun.subdomain}.` : "") +
      config.domainName,
    data
  );
};
