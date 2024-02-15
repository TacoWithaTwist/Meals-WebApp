import Hero from './Hero';
import Explore from './Explore';
import Recent from './Recent';
import '../../../cssModules/Home.css';
export default function Home() {
  return (
    <div className="Home">
      {' '}
      <Hero />
      <Explore />
      <Recent />
    </div>
  );
}
