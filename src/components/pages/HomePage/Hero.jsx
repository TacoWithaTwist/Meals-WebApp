import { Link } from 'react-router-dom';
import '../../../cssModules/Hero.css';
import { Button } from '@mui/base';
export default function Hero() {
  return (
    <div className="container">
      {' '}
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Food image"
        className="HeroImage"
      />
      <div className="Hero">
        <h1 className="HeroHeader">Healthy eating made simple</h1>
        <Link to="/MealSearch" className="LinkToMealSearch">
          <Button className="MealSearchButton"> Search!</Button>
        </Link>
      </div>
    </div>
  );
}
