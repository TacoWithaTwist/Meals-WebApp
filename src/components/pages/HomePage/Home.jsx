import Hero from './Hero';
import Explore from './Explore';
import Recent from './Recent';
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
