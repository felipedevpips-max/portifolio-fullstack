const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

async function sendMail({ name, email, message }) {
  await resend.emails.send({
    from: "Portfólio <no-reply@resend.dev>",
    to: process.env.MAIL_TO,
    replyTo: email,
    subject: "Novo contato pelo portfólio",
    html: `
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${escapeHtml(message)}</p>
    `,
  });
}

module.exports = { sendMail };
