import PropTypes from 'prop-types';
import ListItem from './ListItem';
import { useContext } from 'react';
import { APIContext } from '../../context/APIContext';
import '../../../cssModules/CheckList.css';
export default function CheckList({ mealId }) {
  const list = useContext(APIContext);
  console.log(list[parseInt(mealId)]);
  if (list[parseInt(mealId)]) {
    return (
      <div className="CheckList">
        {list[parseInt(mealId)].ingredients.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
        <div className="line"></div>
        {list[parseInt(mealId)].instructions.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    );
  }
}
CheckList.propTypes = {
  mealId: PropTypes.string.isRequired,
};
