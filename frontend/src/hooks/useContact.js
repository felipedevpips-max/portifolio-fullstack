import { useState } from "react";
import api from "../services/api";

export function useContact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function sendContact(data) {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await api.post("/contact", data);

      if (response.data.success !== true) {
        throw new Error("Resposta inválida do servidor");
      }

      setSuccess(true);
      return response.data;
    } catch (err) {
      setError("Erro ao enviar mensagem");
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return {
    sendContact,
    loading,
    success,
    error,
  };
}
