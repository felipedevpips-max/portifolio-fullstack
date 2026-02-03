function getTechs(req, res) {
  res.json([
    { id: 1, name: "React", description: "Biblioteca para construção de interfaces" },
    { id: 2, name: "Node.js", description: "Ambiente de execução JavaScript no servidor" },
    { id: 3, name: "Docker", description: "Plataforma para containerização de aplicações" }
  ]);
}