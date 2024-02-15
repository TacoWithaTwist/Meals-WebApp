import { NavLink } from 'react-router-dom';
import '../cssModules/NavBar.css';
export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="leftSide">
        <img src="../public/logo.svg" alt="" className="Logo" />
        <NavLink className="NavLink  " to="/Home">
          HealthyBites
        </NavLink>
      </div>

      <div className="rightSide">
        {' '}
        <NavLink className="NavLink Search" to="/MealSearch">
          Search now!
        </NavLink>
        <NavLink className="NavLink Profile" to="/Profile">
          <img src="../public/profileIcon.svg" alt="" className="ProfileIcon" />
        </NavLink>
      </div>
    </div>
  );
}
