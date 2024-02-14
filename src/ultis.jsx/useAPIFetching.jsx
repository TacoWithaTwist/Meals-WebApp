import { useEffect, useState } from 'react';
import { RawJSONFetch } from './RawJSONFetch.jsx';
export function useAPIFetching(header) {
  const [Items, setItems] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const fetchedMeals = await RawJSONFetch(header);
        console.log(fetchedMeals);
        setItems(fetchedMeals);
      } catch (error) {
        setError(error);
      }
    };
    fetchMeal();
  });
  return { Items, error };
}
