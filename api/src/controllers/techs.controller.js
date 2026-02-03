function getTechs(req, res) {
  res.json([
    {
      id: 1,
      name: "HTML5",
      description: "Linguagem de marcação para estruturação de páginas web",
      icon: "html.svg",
    },
    {
      id: 2,
      name: "CSS3",
      description: "Biblioteca para construção de interfaces",
      icon: "css.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      description: "Linguagem de programação para construção de interfaces",
      icon: "javascript.svg",
    },
    {
      id: 4,
      name: "TypeScript",
      description: "Superset do JavaScript com tipagem estática",
      icon: "typescript.svg",
    },
    {
      id: 5,
      name: "React",
      description: "Biblioteca para construção de interfaces",
      icon: "react.svg",
    },
    {
      id: 6,
      name: "Vue.js",
      description: "Biblioteca para construção de interfaces",
      icon: "vue.svg",
    },
    {
      id: 7,
      name: "Node.js",
      description: "Ambiente de execução JavaScript no servidor",
      icon: "nodejs.svg",
    },
    {
      id: 8,
      name: "Docker",
      description: "Plataforma para containerização de aplicações",
      icon: "docker.svg",
    },
    {
      id: 9,
      name: "Vite",
      description: "Ferramenta de construção de projetos de frontend.",
      icon: "vite.svg",
    },
    {
      id: 10,
      name: "Git",
      description: "Sistema de controle de versão",
      icon: "git.svg",
    },
    {
      id: 11,
      name: "GitHub",
      description: "Plataforma de hospedagem de código fonte",
      icon: "github.svg",
    },
  ]);
}
module.exports = { getTechs };