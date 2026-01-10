import './index.css'
import NavBar from './components/NavBar';
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import {Route, Routes} from "react-router-dom"
import Bio from './components/Bio';


function App() {

  return (
    <div>
      <NavBar key={'navBar'}/>
      <Routes>

        <Route
          path='/'
          element={
            <Bio id="bio"/>
          }
        />

        <Route
          path='/projects'
          element={
            <Projects id="projects"/>
          }
        />

        <Route
        path='/contact'
        element={
          <Contact id="contact"/>
        }
        />
        
      </Routes>
    </div>
  );
}

export default App;
