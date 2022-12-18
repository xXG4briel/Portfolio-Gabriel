import { Container } from "./styles";
import '../basePage.css'
import { Button } from "../Button";
import ScrollReveal from 'scrollreveal'
import { MutableRefObject, useEffect, useRef } from "react";

// interface HeaderProps {
//     ref: any;
// }
// props: HeaderProps
export function About(){
    const sectionRef: any = useRef();
    const options = { reset: true, delay: 500};
    const options2 = { reset: true, delay: 500}
    useEffect(() => {
        console.log(sectionRef.current.offSetHeight);
        ScrollReveal().reveal('.container-img', options);
        ScrollReveal().reveal('.container-info', options2);
    }, []);
    return (
        <Container ref={sectionRef} className="section about">
            <div className="about-container">
                <a className="container-img" target="_blank" href="https://github.com/xXG4briel" title="https://github.com/xXG4briel">
                    <img src="https://github.com/xXG4briel.png" draggable="false" alt="xxG4briel photo" />
                </a>
                <article className="container-info">
                    <header className="info-titulo">
                        <h2>about<span>.</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas.</p>
                    </header>
                    <footer>
                        <Button style={ {color: "--primary-main", hover: "--primary-shade"} } name="Baixar CV" href="https://github.com/xXG4briel.png"/>
                        <Button name="Contato"/>
                    </footer>
                </article>
            </div>
        </Container>
    );
}