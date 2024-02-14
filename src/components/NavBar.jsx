import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <span>Logo</span>
      <NavLink to="/MealSearch">Meal Search</NavLink>
      <NavLink to="/Profile">Profile</NavLink>
    </>
  );
}
