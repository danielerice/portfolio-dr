import './index.css'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from "./components/Projects"
import {Route, Routes} from "react-router-dom"
import WaterDropGrid from './components/WaterDropGrid';

function App() {
  return (
    <div>
      <NavBar key={'navBar'}/>
      <WaterDropGrid/>
      <Routes>
        
        <Route 
          path="/"
          element={
            <Home/>
        }
        />

        <Route 
          path="/store"
          element={
            <Projects/>
        }
        />

      </Routes>
    </div>
  );
}

export default App;
