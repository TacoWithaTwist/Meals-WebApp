import { useEffect, useState } from 'react';
import { RawJSONFetch } from './RawJSONFetch.jsx';

function useAPIFetching(url) {
  const [Items, setItems] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const fetchMeal = async () => {
      try {
        const fetchedMeals = await RawJSONFetch(url);
        if (isMounted) {
          setItems(fetchedMeals);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      }
    };
    fetchMeal();
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { Items, error };
}
export { useAPIFetching };
