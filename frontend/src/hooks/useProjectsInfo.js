import { useEffect, useState } from "react";
import api from "../services/api";

export function useProjectsInfo(endpoint = "/projects") {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);

      try {
        const response = await api.get(endpoint);
        setProjects(response.data);
      } catch (err) {
        console.error("Erro ao buscar projetos:", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, [endpoint]);

  return { projects, loading };
}
