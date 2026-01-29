function getProfile(req, res) {
  res.json({
    name: "Felipe Henrique Costa da Silva",
    role: "Desenvolvedor Full Stack",
    bio: "Apaixonado por tecnologia e aprendizado contínuo."
  });
}

module.exports = { getProfile };
