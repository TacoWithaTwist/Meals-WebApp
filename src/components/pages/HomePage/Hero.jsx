import { Link } from 'react-router-dom';
import '../../../cssModules/Hero.css';
export default function Hero() {
  return (
    <div className="Hero">
      <h1 className="HeroHeader">Healthy eating made simple</h1>
      <Link to="/MealSearch" className="LinkToMealSearch">
        Start counting your macros now!
      </Link>
    </div>
  );
}
