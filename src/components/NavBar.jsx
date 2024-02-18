import { NavLink } from 'react-router-dom';
import '../cssModules/NavBar.css';

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="leftSide">
        <img src="/logo.svg" alt="" className="Logo" />
        <NavLink className="NavLink secondary" to="/Home">
          HealthyBites
        </NavLink>
      </div>

      <div className="rightSide">
        <NavLink className="NavLink Search secondary" to="/MealSearch">
          Search now!
        </NavLink>
        <NavLink className="NavLink Profile secondary" to="/Profile">
          <img src="/profileIcon.svg" alt="" className="ProfileIcon" />
        </NavLink>
      </div>
    </div>
  );
}
