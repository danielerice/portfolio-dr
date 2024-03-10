import './index.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import {Route, Routes} from "react-router-dom"
import Bio from './components/Bio';
import { useRef } from 'react';
import TopButton from './components/TopButton';
import starryBG from './assets/StarryBG.mov'
import Background from './components/Background';


function App() {
  const bio = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)


  return (
    <div>
      <Background/>
      <NavBar key={'navBar'}/>
      <Routes>

        <Route
          path='/'
          element={
            <Home id="home"/>
          }
        />
        
        <Route
          path='/bio'
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
