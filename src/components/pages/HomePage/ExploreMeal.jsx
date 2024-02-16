import PropTypes from 'prop-types';
import '../../../cssModules/ExploreMeal.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function ExploreMeal({ meal }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <Link
      to="/MealDetails"
      className={isClicked ? 'pressed ExploreMeal' : 'ExploreMeal'}
      onClick={handleClick}
    >
      <img src={meal.img} alt="#" className="ExploreMealImage" />
      <h4 className="ExploreMealTitle">{meal.name}</h4>
    </Link>
  );
}
ExploreMeal.propTypes = {
  meal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
