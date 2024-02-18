import PropTypes from 'prop-types';
import '../../../cssModules/ExploreMeal.css';
import { Link } from 'react-router-dom';
export default function ExploreMeal({ meal }) {
  return (
    <Link
      to={'/MealDetails/' + `${meal.mealId}`}
      className={'ExploreMeal primary'}
    >
      <img src={meal.img} alt="#" className="ExploreMealImage" />
      <div className="CardMealDesc">
        <h4 className="ExploreMealTitle secondary">{meal.name}</h4>
        <p className="ExploreMealDesc secondary">{meal.desc}</p>
      </div>
    </Link>
  );
}
ExploreMeal.propTypes = {
  meal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    mealId: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};
