import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.jsx';
import { APIContext } from './components/context/APIContext.jsx';
function App() {
  const url = 'https://food-recipes-with-images.p.rapidapi.com/';
  return (
    <APIContext.Provider value={url}>
      <div className="App">
        <NavBar />
        <Outlet />
      </div>
    </APIContext.Provider>
  );
}
export default App;
