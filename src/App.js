import './index.css'
import NavBar from './components/NavBar';
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import {Route, Routes} from "react-router-dom"
import Bio from './components/Bio';
import { useRef } from 'react';
import TopButton from './components/TopButton';


function App() {
  const bio = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)


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
          <Contact id="contact" contact={contact}/>
        }
        />
        
      </Routes>
    </div>
  );
}

export default App;
