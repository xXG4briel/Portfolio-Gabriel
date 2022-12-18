import { ReactNode, useEffect, useState } from 'react';

import { Container } from './styles';

interface HeaderProps {
  route: ReactNode;
}

export function Header({ route }: HeaderProps) {
  const subjects = [
    { name: 'About', link: 'about'},
    { name: 'Project', link: 'project'},
    // { name: 'Service', link: 'service'},
    { name: 'Contact', link: 'contact'}
  ];
  const [subjectsHeights, setHeights] = useState([0, 0, 0]);

  useEffect(() => {
    // window.addEventListener("load", () => {
    //   setHeights(subjects.map( ({link}) => (document.querySelector(".section." + link) as HTMLElement)?.offsetTop));  
    // }, false);
    
    // window.addEventListener("scroll", () =>{
    //     console.log(subjectsHeights);
    //     const scroll = window.scrollY + 70;
    //   console.log("window.scrollY: ", window.scrollY);
    //   // if (window.scrollY >= 0 && window.scrollY < subjectsHeights[1]  ) { // about
    //   // }
    //   if (scroll >= subjectsHeights[1] && scroll < subjectsHeights[2]  ) { // about
    //     console.log("about")
    //   }
    //   else if (scroll >= subjectsHeights[2] && scroll < subjectsHeights[3]  ) { // project
    //     console.log("project")
    //     // console.log("service")
    //   }
    //   else if (scroll >= subjectsHeights[3] ){ // contact
    //     console.log("contact")
    //   }
    //   else { // contact
    //     console.log("home")
    //   }
      
    // }, {passive: true})
  }, []);

  const [isActivate, setActivate] = useState(false);
  const [routeActivate, setRouteActivate] = useState("");
  
  // const navigate = (route: string) => {
  // }
  const closeMenu = (route: string) =>{
    
    event?.preventDefault();
    if (isActivate) {
      setActivate(false);
    }
    setRouteActivate(route);
    var name = '.section' +  '.' + route;
    // console.log(document.querySelector(name), (document.querySelector(name) as HTMLElement).offsetHeight)
    const top: number = (document.querySelector(name) as HTMLElement)?.offsetTop - 70 ?? 0;
    window.scrollTo({
      top,
      left: 0,
      behavior: 'smooth'
    });
  }
  return (
    <Container>
      <nav>
        {/* <a className="logo" href="/">M</a> */}
        <div className={ "mobile-menu"} onClick={() => setActivate(!isActivate)}>
          {/* <span>Menu</span> */}
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          {/* <div className='container'>
          </div> */}
        </div>
        <ul className={(isActivate ? 'activate' : '') + " nav-list"}>
          { subjects.map( ( {name, link} ) =>
            <li key={name} className={(routeActivate == link ? 'active' : '') + (route == name ? ' selected' : '' )}><a onClick={ () => closeMenu(link)} href={link}>{name}</a></li>
          )}
        </ul>
      </nav>
    </Container>
  );
}
