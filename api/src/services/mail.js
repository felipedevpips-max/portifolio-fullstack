const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendMail({ name, email, message }) {
  await resend.emails.send({
    from: "Portfólio <onboarding@resend.dev>",
    to: process.env.MAIL_TO,
    replyTo: email,
    subject: "Novo contato pelo portfólio",
    html: `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `,
  });
}

module.exports = { sendMail };
