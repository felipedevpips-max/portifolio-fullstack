function getProfile(req, res) {
  res.json({
    name: "Felipe Costa",
    role: "Desenvolvedor Full Stack com foco em React,Node e APIs escaláveis",
    techs:["React", "Node.js", "Docker"],
    bio: "Sou Felipe Costa, desenvolvedor JavaScript com foco em React e Vuejs, atuando na construção de interfaces modernas e aplicações web completas. Tenho experiência prática no desenvolvimento de projetos do zero, desde a criação do front-end até a implementação de APIs em Nodejs, incluindo autenticação, consumo de dados e integração entre camadas. Nos meus projetos, utilizo Docker para padronizar o ambiente de desenvolvimento e facilitar a execução da aplicação, além de Git e GitHub para versionamento e organização do fluxo de trabalho. Já publiquei aplicações em produção, o que me deu experiência real com deploy, manutenção e evolução de código. Atualmente curso Análise e Desenvolvimento de Sistemas e sigo aprimorando meus conhecimentos em arquitetura de aplicações, boas práticas e código limpo. ",
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
