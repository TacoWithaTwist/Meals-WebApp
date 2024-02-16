import PropTypes from "prop-types";
import "../../../cssModules/ExploreMeal.css";
import { Link } from "react-router-dom";
export default function ExploreMeal({ meal }) {
  return (
    <Link to={"/MealDetails/" + `${meal.mealId}`} className={"ExploreMeal"}>
      <img src={meal.img} alt="#" className="ExploreMealImage" />
      <h4 className="ExploreMealTitle">{meal.name}</h4>
    </Link>
  );
}
ExploreMeal.propTypes = {
  meal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    mealId: PropTypes.string.isRequired,
  }).isRequired,
};
