import './index.css'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
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
      <NavBar key={'navBar'} bio={bio} projects={projects} contact={contact}/>
      <TopButton/>
      {/* <WaterDropGrid/> */}
      <Home id="home"/>
      <Bio id="bio" bio={bio}/>
      <Projects id="projects" projects={projects}/>
      <Contact id="contact" contact={contact}/>
    </div>
  );
}

export default App;
