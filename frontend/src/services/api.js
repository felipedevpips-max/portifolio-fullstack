import axios from "axios";

const api = axios.create({
  baseURL: "https://portifolio-fullstack-1w84.onrender.com/api",
});

export default api;
