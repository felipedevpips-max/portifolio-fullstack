function getProjects(req, res) {
  res.json([
    {
      id: 1,
      title: "Portfólio Fullstack",
      description: "Portfólio completo desenvolvido com React no frontend e Node.js/Express no backend, exibindo projetos, habilidades e informações de contato em tempo real. Inclui design responsivo, animações suaves e formulários funcionais que demonstram práticas reais de desenvolvimento full‑stack.",
      techs: ["React","JavaScript", "Node", "Express","Docker"],
      github: "https://github.com/felipedevpips-max/portifolio-fullstack",
      deploy:"https://the-mythz.vercel.app/",
      image: "portifolio.png",
    },

    {
      id: 2,
      title: "The Myhtz",
      description: "Website institucional desenvolvido para a banda The Mythz, com foco em presença digital, divulgação e marketing, ao mesmo tempo em que serviu como um projeto prático para evolução das minhas habilidades em desenvolvimento front-end.",
      techs: ["React", "Vite","JavaScript","CSS Modules"],
      github: "https://github.com/felipedevpips-max/the-mythz",
      deploy:"https://portifolio-fullstack-ivory.vercel.app/",
      image: "themythz.png",
    },
    {
      id: 3,
      title: "Cookin Up",
      description: "O Cookin Up foi criado com o objetivo de praticar conceitos essenciais do desenvolvimento front-end moderno, utilizando o ecossistema do Vue 3 aliado ao desempenho do Vite e à segurança do TypeScript.",
      techs: ["Vue", "Vite","TypeScript","CSS Modules"],
      github: "https://github.com/felipedevpips-max/cookin-up",
      deploy:"https://cookin-up-3as1-2cumbfutl-felipes-projects-17fecd7b.vercel.app/",
      image: "cookinup.png",
    },
    {
      id: 4,
      title: "To Do List",
      description: "Aplicação de lista de tarefas desenvolvida com React e JavaScript, permitindo ao usuário criar, marcar como concluída e excluir tarefas. O projeto foi criado com o objetivo de praticar conceitos essenciais do desenvolvimento front-end moderno.",
      techs: ["React", "JavaScript","CSS Modules"],
      github: "https://github.com/felipedevpips-max/to-do-list-react",
      deploy:"https://to-do-list-react-nine-neon.vercel.app/",
      image: "todolist.png",
    },
    {
      id: 5,
      title: "Pomodoro + Task Manager",
      description: "Aplicação que integra um timer Pomodoro com um gerenciador de tarefas (CRUD). As tarefas são salvas no LocalStorage e são marcadas como concluídas automaticamente ao final de um ciclo de foco. O projeto foi desenvolvido com o objetivo de praticar conceitos essenciais do desenvolvimento front-end moderno.",
      techs: ["JavaScript"],
      github: "https://github.com/felipedevpips-max/projeto-forkus",
      deploy:"https://projeto-forkus.vercel.app/",
      image: "pomodoro.png",
    },
  ]);
}

module.exports = { getProjects };
