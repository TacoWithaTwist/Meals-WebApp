import PropTypes from 'prop-types';
import { useContext } from 'react';
import { APIContext } from '../../context/APIContext';
import '../../../cssModules/Nutrition.css';
export default function Nutrition({ mealId }) {
  const list = useContext(APIContext);
  return (
    <div className="Nutrition">
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Calories(All measurments for 100g)</td>
            <td>{list[mealId].nutrition.calories}</td>
          </tr>
          <tr>
            <td>Proteins</td>
            <td>{list[mealId].nutrition.protein}</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>{list[mealId].nutrition.carbohydrates}</td>
          </tr>
          <tr>
            <td>Fats</td>
            <td>{list[mealId].nutrition.fat}</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
Nutrition.propTypes = {
  mealId: PropTypes.string.isRequired,
};
