const { sendMail } = require("../services/mail");

async function sendContact(req, res) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Dados incompletos" });
  }

  try {
    await sendMail({ name, email, message });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao enviar email" });
  }
}

module.exports = { sendContact };
