function getProjects(req, res) {
  res.json([
    {
      id: 1,
      title: "Portfólio Fullstack",
      techs: ["React", "Node", "Docker"]
    },
    {
      id: 2,
      title: "API de Estudos",
      techs: ["Node", "Express"]
    }
  ]);
}

module.exports = { getProjects };


