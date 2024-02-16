import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIContext } from "../../context/APIContext";
import CheckList from "./CheckList";
import Nutrition from "./Nutrition";
export default function MealDetails() {
  const [meal, setMeal] = useState({});
  const params = useParams();
  const list = useContext(APIContext);
  useEffect(() => {
    list.forEach((element) => {
      if (element.mealId === params.mealId) {
        setMeal(element);
        console.log(element);
      }
    });
  }, [params]);

  return (
    <div className="MealDetails">
      <div className="MealDetailsContainer">
        <img src={meal.img} alt="#" />
        <h2>{meal.name}</h2>
        <CheckList mealId={params.mealId} />
        <CheckList mealId={params.mealId} />
        <Nutrition mealId={params.mealId} />
      </div>
    </div>
  );
}
