import { useEffect, useState } from "react";
import api from "../services/api"; // AQUI

export function useProfileInfo() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await api.get("/profile");
        setProfile(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  return { profile, loading };
}
