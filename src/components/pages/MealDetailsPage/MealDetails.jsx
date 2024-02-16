import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIContext } from '../../context/APIContext';
import { Button } from '@mui/base';
import CheckList from './CheckList';
import Nutrition from './Nutrition';
import '../../../cssModules/MealDetails.css';

export default function MealDetails() {
  const [isFavorite, setIsFavorite] = useState(false); // Track if the meal is a favorite
  const [meal, setMeal] = useState({}); // Store the meal details
  const params = useParams();
  const list = useContext(APIContext);
  useEffect(() => {
    const loadDataFromLocal = () => {
      const savedData = localStorage.getItem(params.mealId);
      if (savedData !== null) {
        // Convert the retrieved string to a boolean
        setIsFavorite(JSON.parse(savedData));
      }
    };

    loadDataFromLocal();
  }, [params.mealId]);

  useEffect(() => {
    const selectedMeal = list.find(
      (element) => element.mealId === params.mealId
    );
    if (selectedMeal) {
      setMeal(selectedMeal);
    }
  }, [params, list]);

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };

  useEffect(() => {
    if (isFavorite) {
      localStorage.setItem(`${params.mealId}`, JSON.stringify(meal));
    } else {
      localStorage.removeItem(`${params.mealId}`);
    }
  }, [isFavorite, params.mealId, meal]);

  return (
    <div className="MealDetails">
      <div className="MealDetailsContainer">
        <img src={meal.img} alt="#" className="MealDetailsImage" />
        <h2 className="MealDetailsName">{meal.name}</h2>
        <Button onClick={toggleFavorite} className="MealDetailsFavoriteButton">
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
        <CheckList mealId={params.mealId} />
        <Nutrition mealId={params.mealId} />
      </div>
    </div>
  );
}
