import { useEffect, useState } from 'react';
import { RawJSONFetch } from './RawJSONFetch.jsx';
export function useAPIFetching(url) {
  const [Items, setItems] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const fetchedMeals = await RawJSONFetch(url);
        setItems(fetchedMeals);
      } catch (error) {
        setError(error);
      }
    };
    fetchMeal();
  });
  return { Items, error };
}
