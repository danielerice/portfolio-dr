import './index.css'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from "./components/Projects"
import {Route, Routes} from "react-router-dom"
import WaterDropGrid from './components/WaterDropGrid';
import Bio from './components/Bio';

function App() {
  return (
    <div>
      <NavBar key={'navBar'}/>
      <WaterDropGrid/>
      <Routes>
        
        <Route 
          exact path="/"
          element={
            <Home/>
        }
        />

        <Route 
          path="/projects"
          element={
            <Projects/>
        }
        />

        <Route 
          path="/bio"
          element={
            <Bio/>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
