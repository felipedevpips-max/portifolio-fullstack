function getProfile(req, res) {
  res.json({
    name: "Felipe Costa",
    role: "Desenvolvedor Full Stack",
    bio: "Apaixonado por tecnologia e aprendizado contínuo.",
    contacts: [
      {
        id: 1,
        type: "github",
        url: "https://github.com/felipedevpips-max"
      },
      {
        id: 2,
        type: "linkedin",
        url: "https://www.linkedin.com/in/felipedevsilva",
      },
      {
        id: 3,
        type: "whatsapp",
        url: "https://wa.me/5531986036967",
      }
    ]
  });
}

module.exports = { getProfile };
