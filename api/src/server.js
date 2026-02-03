require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT;
if (!PORT) throw new Error("PORT não definida!");

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
