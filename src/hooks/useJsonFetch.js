import React, {useState, useEffect} from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, opts);
        if (response.ok) {
          try {
            const data = await response.json();
            setData(data);
          } catch(error) {
            throw new Error(`Ошибка парсинга (${response.status} ${response.statusText})`);
          }
        } else {
          throw new Error(`Ошибка сети (${response.status} ${response.statusText})`);
        }
      } catch(error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, opts]);

  return [data, loading, error];
}
