import { useState, useEffect } from "react";

export function useFetchRepo(owner: string, repo: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepoData() {
      try {
        const response = await fetch(`/api/repos?owner=${owner}&repo=${repo}`);

        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepoData();
  }, [owner, repo]);

  return { data, loading, error };
}
