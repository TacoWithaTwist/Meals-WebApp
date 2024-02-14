import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.jsx';
import { APIContext } from './components/context/APIContext.jsx';
// import { useAPIFetching } from './ultis.jsx/useAPIFetching.jsx';
function App() {
  const APIHeader = {
    url: 'https://food-recipes-with-images.p.rapidapi.com/',
    options: {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd9f6f48fb7msh9692a0c2c426e07p1e21c9jsn5db116ac318f',
        'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com',
      },
    },
  };
  // const url = 'https://tasty.p.rapidapi.com/recipes/list';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'd9f6f48fb7msh9692a0c2c426e07p1e21c9jsn5db116ac318f',
  //     'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  //   },
  // };
  // const { items, error } = useAPIFetching(url, options);
  return (
    <APIContext.Provider value={APIHeader}>
      <div className="App">
        <NavBar />
        <Outlet />
      </div>
    </APIContext.Provider>
  );
}
export default App;
