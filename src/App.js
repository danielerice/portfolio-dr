import './index.css'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from "./components/Projects"
import {Route, Routes} from "react-router-dom"
import WaterDropGrid from './components/WaterDropGrid';
import Bio from './components/Bio';
import { useRef } from 'react';

function App() {
  const bio = useRef(null)
  const projects = useRef(null)


  return (
    <div>
      <NavBar key={'navBar'} bio={bio} projects={projects} />
      <WaterDropGrid/>
      <Bio id="bio" bio={bio}/>
      <Projects id="projects" projects={projects}/>
    </div>
  );
}

export default App;
