function getProfile(req, res) {
  res.json({
    name: "Felipe Costa",
    role: "Desenvolvedor Full Stack",
    bio: "Apaixonado por tecnologia e aprendizado contínuo."
  });
}

module.exports = { getProfile };
