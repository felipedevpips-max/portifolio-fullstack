function getProjects(req, res) {
  res.json([
    {
      id: 1,
      title: "Portfólio Fullstack",
      description: "...",
      techs: ["React", "Node"],
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
  ]);
}

module.exports = { getProjects };
