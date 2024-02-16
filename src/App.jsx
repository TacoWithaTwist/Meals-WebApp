import './App.css';
import NavBar from './components/NavBar.jsx';
// import { APIContext } from './components/context/APIContext.jsx';
import { Outlet } from 'react-router-dom';
// import raw from './assets/raw.txt';
// import { useAPIFetching } from './utils/useAPIFetching.jsx';

function App() {
  // const object = useAPIFetching(raw);
  return (
    // <APIContext.Provider value={object}>
    <div className="App">
      <NavBar />
      <div className="pageContainer">
        <Outlet />
      </div>
    </div>
    // </APIContext.Provider>
  );
}

export default App;
