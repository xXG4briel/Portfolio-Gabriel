import { useEffect, useRef } from 'react'
import './App.css'
import { About } from './components/About'
import { Contact } from './components/index'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Project } from './components/Project'
import axios from "axios";

function App() {
  
  const route = "";
  const sectionsName = ["home", "about", "project","contact"];
  var projects: any[] = [];
  const home = useRef();
  const about = useRef();
  const project = useRef();
  const contact = useRef();

  const sections = sectionsName.map( section => 
    (document.querySelector("section." + section) as HTMLElement) // ?.offsetHeight ?? 0
  );
  // console.log(tops)
    
  
  useEffect(() => {
  }, [])

  return (
    <>
      <Header route={route}/>
      <main className='container'>
        <Home/>
        {/* ref={home} */}
        <About/>
        {/* ref={about} */}
        <Project/>
        {/* ref={project} */}
        <Contact/>
        {/* ref={contact} */}
      </main>
    </>
  )
}

export default App
