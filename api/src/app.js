const express = require("express");
const cors = require("cors");

const app = express();

const projectsRoutes = require("./routes/projects.routes");

const profileRoutes = require("./routes/profile.routes");

const contactRoutes = require("./routes/contact.routes");

const techsRoutes = require("./routes/techs.routes");


// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/projects", projectsRoutes);

app.use("/api/profile", profileRoutes);

app.use("/api/contact", contactRoutes);

app.use("/api/techs", techsRoutes);


// Rota de teste
app.get("/api/health", (req, res) => {
  res.json({ status: "API rodando 🚀" });
});

module.exports = app;
