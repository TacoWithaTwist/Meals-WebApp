import './App.css';
import NavBar from './components/NavBar.jsx';
import { APIContext } from './components/context/APIContext.jsx';
import { Theme } from './components/context/Theme.jsx';
import { Outlet } from 'react-router-dom';
// import raw from './assets/raw.txt';
// import { useAPIFetching } from './utils/useAPIFetching.jsx';

function App() {
  const list = [
    {
      name: 'Blueberry Pancakes',
      img: 'https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      ingredients: [
        '1 cup flour',
        '1 cup blueberries',
        '1 egg',
        '1/2 cup milk',
        '2 tbsp sugar',
      ],
      instructions: [
        'Mix flour, sugar, egg, and milk in a bowl.',
        'Fold in blueberries gently.',
        'Heat a pan and pour the batter to make pancakes.',
        'Cook until bubbles appear, then flip and cook the other side until golden brown.',
      ],
      desc: 'Delicious blueberry pancakes perfect for breakfast.',
      time: '30 minutes',
      mealId: '0',
      nutrition: {
        calories: 350,
        protein: 8,
        carbohydrates: 50,
        fat: 12,
      },
    },
    {
      name: 'Chich Kabab',
      img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      ingredients: [
        '1 lb ground beef',
        '1 onion, chopped',
        '2 cloves garlic, minced',
        '1 tsp paprika',
        '1/2 tsp cumin',
        'Salt and pepper to taste',
      ],
      instructions: [
        'Mix ground beef with chopped onion, minced garlic, paprika, cumin, salt, and pepper in a bowl.',
        'Form the mixture into kabab shapes around skewers.',
        'Grill or broil the kababs until cooked through, about 10-12 minutes, turning occasionally.',
      ],
      desc: 'Tender and flavorful kababs seasoned to perfection.',
      time: '20 minutes',
      mealId: '1',
      nutrition: {
        calories: 400,
        protein: 25,
        carbohydrates: 5,
        fat: 30,
      },
    },
    {
      name: 'Hawaian Pizza',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      ingredients: [
        'Pizza dough',
        'Tomato sauce',
        'Mozzarella cheese',
        'Pineapple chunks',
        'Ham slices',
      ],
      instructions: [
        'Preheat your oven to 450°F (230°C).',
        'Roll out the pizza dough on a floured surface to your desired thickness.',
        'Spread tomato sauce evenly over the dough.',
        'Sprinkle mozzarella cheese over the sauce.',
        'Add pineapple chunks and ham slices on top of the cheese.',
        'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown and the cheese is melted and bubbly.',
      ],
      desc: 'A tropical twist on the classic pizza, loaded with pineapple and ham.',
      time: '25 minutes',
      mealId: '2',
      nutrition: {
        calories: 300,
        protein: 15,
        carbohydrates: 35,
        fat: 10,
      },
    },
    {
      name: 'Cheesecake',
      img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D',
      ingredients: [
        '1 1/2 cups graham cracker crumbs',
        '1/4 cup sugar',
        '1/2 cup butter, melted',
        '24 oz cream cheese, softened',
        '1 cup sugar',
        '3 eggs',
        '1 tsp vanilla extract',
        '1 cup sour cream',
      ],
      instructions: [
        'Preheat your oven to 325°F (165°C).',
        'Mix graham cracker crumbs, sugar, and melted butter.',
        'Press mixture into the bottom of a 9-inch springform pan.',
        'In a large bowl, beat cream cheese and sugar until smooth.',
        'Add eggs one at a time, beating well after each addition.',
        'Stir in vanilla extract and sour cream.',
        'Pour batter over crust in the pan.',
        'Bake for 55-60 minutes or until the center is almost set.',
        'Let cheesecake cool in the oven with the door propped open for 1 hour.',
        'Chill in the refrigerator for at least 4 hours before serving.',
      ],
      desc: 'Creamy and indulgent cheesecake with a buttery graham cracker crust.',
      time: '6 hours',
      mealId: '3',
      nutrition: {
        calories: 500,
        protein: 8,
        carbohydrates: 45,
        fat: 30,
      },
    },
    {
      name: 'Spaghetti Carbonara',
      img: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhZ2hldHRpJTIwY2FyYm9uYXJhfGVufDB8fDB8fHww',
      ingredients: [
        '8 oz spaghetti',
        '4 slices bacon, chopped',
        '2 cloves garlic, minced',
        '2 eggs',
        '1/2 cup grated Parmesan cheese',
        'Salt and black pepper to taste',
        'Fresh parsley, chopped (for garnish)',
      ],
      instructions: [
        'Cook spaghetti according to package instructions until al dente.',
        'In a skillet, cook chopped bacon until crispy. Remove bacon and set aside, leaving the bacon fat in the skillet.',
        'Add minced garlic to the skillet and cook until fragrant.',
        'In a bowl, whisk together eggs, grated Parmesan cheese, salt, and black pepper.',
        'Drain cooked spaghetti and add it to the skillet with the garlic and bacon fat. Toss to coat the spaghetti with the fat.',
        'Remove skillet from heat and quickly pour in the egg mixture, tossing the spaghetti continuously to coat it evenly. The heat from the spaghetti will cook the eggs and create a creamy sauce.',
        'Add cooked bacon back to the skillet and toss to combine.',
        'Serve immediately, garnished with chopped fresh parsley.',
      ],
      desc: 'A classic Italian pasta dish made with spaghetti, bacon, eggs, and Parmesan cheese.',
      time: '25 minutes',
      mealId: '4',
      nutrition: {
        calories: 450,
        protein: 20,
        carbohydrates: 30,
        fat: 25,
      },
    },
    {
      name: 'Caesar Salad',
      img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Flc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D',
      ingredients: [
        '1 head romaine lettuce, chopped',
        '1/2 cup Caesar dressing',
        '1/4 cup grated Parmesan cheese',
        '1 cup croutons',
      ],
      instructions: [
        'In a large bowl, toss chopped romaine lettuce with Caesar dressing until evenly coated.',
        'Sprinkle grated Parmesan cheese over the salad.',
        'Add croutons and toss again to combine.',
        'Serve immediately as a side dish or add grilled chicken or shrimp for a complete meal.',
      ],
      desc: 'A classic Caesar salad with crisp romaine lettuce, tangy Caesar dressing, and crunchy croutons.',
      time: '15 minutes',
      mealId: '5',
      nutrition: {
        calories: 200,
        protein: 5,
        carbohydrates: 15,
        fat: 10,
      },
    },
  ];
  const [primary, secondary, accent] = ['#FCFAF8', '#27251D', '#ec6313'];
  return (
    <APIContext.Provider value={list}>
      <Theme.Provider value={[primary, secondary, accent]}>
        <div className="App">
          <NavBar />
          <div className="pageContainer">
            <Outlet />
          </div>
        </div>{' '}
      </Theme.Provider>
    </APIContext.Provider>
  );
}

export default App;
