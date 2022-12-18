import { useEffect, useRef } from 'react'
import './App.css'
import { About } from './components/About'
import { Contact } from './components/index'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Project } from './components/Project'

function App() {
  const route = "";
  const sectionsName = ["home", "about", "project","contact"];
  const home = useRef();
  const about = useRef();
  const project = useRef();
  const contact = useRef();

  const sections = sectionsName.map( section => 
    (document.querySelector("section." + section) as HTMLElement) // ?.offsetHeight ?? 0
  );
  // console.log(tops)

  useEffect(() => {
    // console.log(about)
    // const handleScroll = (event: any) => {
      // sections.filter( (section) => {
      //   console.log(window.scrollY, section?.offsetHeight ?? 0);
      // });
      // console.log('window.scrollY', window.scrollY);
      // (document.querySelector("section." + "about" ) as HTMLElement)?.offsetHeight ?? 0);
    // };

    // const sectionScrolled = sections.forEach( sectionName => {
    // });

    // window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
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
