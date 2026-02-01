function getProjects(req, res) {
  res.json([
    {
      id: 1,
      title: "Portfólio Fullstack",
      description: "Site pessoal com backend em Node e frontend em React.",
      techs: ["React", "Node", "Docker"],
      github: "https://github.com/seuuser/portfolio"
    },
    {
      id: 2,
      title: "API de Estudos",
      description: "API para gerenciar estudos e tarefas.",
      techs: ["Node", "Express"],
      github: "https://github.com/seuuser/api-estudos"
    }
  ]);
}

module.exports = { getProjects };


