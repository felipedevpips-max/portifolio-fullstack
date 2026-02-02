function getProjects(req, res) {
  res.json([
    {
      id: 1,
      title: "Portfólio Fullstack",
      description: "Um portfólio completo utilizando React e Node.js.",
      techs: ["React", "Node", "Express","Docker"],
      github: "https://github.com/felipedevpips-max/portifolio-fullstack",
      deploy:"https://the-mythz.vercel.app/",
      image: "themythz.png",
    },

    {
      id: 2,
      title: "The Myhtz",
      description: "Website institucional desenvolvido para a banda The Mythz, com foco em presença digital, divulgação e marketing, ao mesmo tempo em que serviu como um projeto prático para evolução das minhas habilidades em desenvolvimento front-end.",
      techs: ["React", "Vite","JavaScript","CSS Modules"],
      github: "https://github.com/felipedevpips-max/the-mythz",
      deploy:"https://the-mythz.vercel.app/",
      image: "themythz.png",
    },
    {
      id: 3,
      title: "Cookin Up",
      description: "O Cookin Up foi criado com o objetivo de praticar conceitos essenciais do desenvolvimento front-end moderno, utilizando o ecossistema do Vue 3 aliado ao desempenho do Vite e à segurança do TypeScript.",
      techs: ["Vue", "Vite","TypeScript","CSS Modules"],
      github: "https://github.com/felipedevpips-max/cookin-up",
      deploy:"https://cookin-up-3as1-2cumbfutl-felipes-projects-17fecd7b.vercel.app/",
      image: "themythz.png",
    },
  ]);
}

module.exports = { getProjects };
