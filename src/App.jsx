import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import NavBar from './components/NavBar.jsx';
import { APIContext } from './components/context/APIContext.jsx';
import { Outlet } from 'react-router-dom';
import raw from './assets/raw.txt';

function App() {
  return (
    <APIContext.Provider value={raw}>
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
