function sendContact(req, res) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Dados incompletos" });
  }

  res.json({ success: true });
}

module.exports = { sendContact };
