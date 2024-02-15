import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import NavBar from './components/NavBar.jsx';
import { APIContext } from './components/context/APIContext.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  const url = 'https://food-recipes-with-images.p.rapidapi.com/';
  return (
    <APIContext.Provider value={url}>
      <div className="App">
        <NavBar />
        <TransitionGroup>
          <CSSTransition classNames="page" timeout={500}>
            <Outlet />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </APIContext.Provider>
  );
}

export default App;
