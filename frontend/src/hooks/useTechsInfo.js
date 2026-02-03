import { useEffect, useState } from "react";
import api from "../services/api";

export function useTechsInfo(endpoint = "/techs") {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTechs() {
      setLoading(true);

      try {
        const response = await api.get(endpoint);
        setTechs(response.data);
      } catch (err) {
        console.error("Erro ao buscar tecnologias:", err);
        setTechs([]);
      } finally {
        setLoading(false);
      }
    }

    loadTechs();
  }, [endpoint]);

  return { techs, loading };
}
