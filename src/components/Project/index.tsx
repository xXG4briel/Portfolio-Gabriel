import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Container } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Button } from '../Button';
import axios from 'axios';

// interface ProjectProps {
//   children: ReactNode;
// }

var project: any[] = [
];

// { children }: ProjectProps
export function Project() {
  const [slidesPerView, setSlides ] = useState(1.25); // 1.25

  const ref: MutableRefObject<HTMLElement | any> = useRef();

  function openTab(url: string){
    return window.open(url, "_blank");
  }
  useEffect(() => {
    axios.get('https://portfolioapi-z6bn.onrender.com/projects')
    .then((result: any) => {
      project = result.data;
      console.log(project)
    })
    .catch((error) => console.error(error) );

    if (document.body.offsetWidth >= 1700) {
      setSlides(1.4);
    }
    else if (document.body.offsetWidth >= 992 && document.body.offsetWidth < 1700) {
      setSlides(1.2);
    }
    else { // if (document.body.offsetWidth < 992) { // document.body.offsetWidth > 768 && 
      setSlides(1.4);
    }
}, []);
  return (
    <Container ref={ref} className="project section">
      <div className="project-container">
        <h2>Project<span>.</span></h2>
        <article className="project-card-container">
          <Swiper
            spaceBetween={100}
            slidesPerView={slidesPerView}
            >
            {/* onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} */}
            <h2>{ project.length }</h2>
            { project.length > 0
            ? project.map( ({Title, Description, URL, Image}, i) =>
              <SwiperSlide key={i} >
                <div className="project-card">
                  <aside className="project-img-container">
                    <div style={{ background: `linear-gradient(rgba(255, 255, 255, 0.1),rgba(0, 0, 0, .5)), url(${Image})` }} ></div>
                  </aside>
                  <aside className="project-info-container">
                      <h4>{Title}</h4>
                      <p>{Description}</p>
                      <Button name="Ver" function={ () => window.open(URL, '_blank')}/>
                  </aside>
                </div>
              </SwiperSlide>
              ) : 
              <h1>Sem Projetos</h1>
          }
          </Swiper>
        </article>
      </div>
    </Container>
  );
}
// <Swiper
//   spaceBetween={1}
//   slidesPerView={1.15}
//   onSlideChange={() => console.log('slide change')}
//   onSwiper={(swiper) => console.log(swiper)}
// >
//   { new Array(8).fill(0).map( x =>
//     <SwiperSlide>
//       <h1>teste</h1>
//     </SwiperSlide>
//     )}
// </Swiper>
