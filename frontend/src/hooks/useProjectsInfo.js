import { useEffect, useState } from "react";
import api from "../services/api"; // AQUI

export function useProjectsInfo() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await api.get("/projects");
        setProjects(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return { projects, loading };
}
