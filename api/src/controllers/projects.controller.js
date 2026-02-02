function getProjects(req, res) {
  res.json([
    {
      id: 1,
      title: "Portfólio Fullstack",
      description: "Um portfólio completo utilizando React e Node.js.",
      techs: ["React", "Node", "Express","Docker"],
      github: "https://github.com/...",
      image: "themythz.png",
    },

    {
      id: 2,
      title: "API de Estudos",
      description: "API para gerenciar estudos e tarefas.",
      techs: ["Node", "Express"],
      github: "https://github.com/...",
      image: "themythz.png",
    },
    {
      id: 3,
      title: "API de Estudos",
      description: "API para gerenciar estudos e tarefas.",
      techs: ["Node", "Express"],
      github: "https://github.com/...",
      image: "themythz.png",
    },
  ]);
}

module.exports = { getProjects };
