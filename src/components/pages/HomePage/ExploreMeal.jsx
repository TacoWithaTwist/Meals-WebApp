import PropTypes from 'prop-types';
export default function ExploreMeal({ meal }) {
  return (
    <div className="ExploreMeal">
      <img src={meal.strSource} alt="#" className="ExploreMealImage" />
      <h4 className="ExploreMealTitle">{meal.strMeal}</h4>
    </div>
  );
}
ExploreMeal.propTypes = {
  key: PropTypes.number.isRequired,
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strSource: PropTypes.string.isRequired,
  }).isRequired,
};
