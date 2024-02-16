import ExploreMeal from './ExploreMeal';
import '../../../cssModules/Explore.css';
export default function Explore() {
  const list = [
    {
      name: 'Blueberry Pancakes',
      img: 'https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      ingredients: '',
      desc: 'wow',
      time: '30sec',
    },
    {
      name: 'Chich Kabab',
      img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      ingredients: '',
      desc: 'wow',
      time: '30sec',
    },
    {
      name: 'Hawaian Pizza',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      ingredients: '',
      desc: 'wow',
      time: '30sec',
    },
    {
      name: 'Cheesecake',
      img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D',
      ingredients: '',
      desc: 'wow',
      time: '30sec',
    },
    {
      name: 'Cheesecake',
      img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D',
      ingredients: '',
      desc: 'wow',
      time: '30sec',
    },
    {
      name: 'Cheesecake',
      img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D',
      ingredients: '',
      desc: 'wow',
      time: '30sec',
    },
  ];
  return (
    <>
      <div className="Explore">
        <h2>Explore by Popular recipes!</h2>
        <div className="ExploreMealsContainer">
          {list.map((item, index) => (
            <ExploreMeal key={index} meal={item} />
          ))}
        </div>
      </div>
    </>
  );
}
