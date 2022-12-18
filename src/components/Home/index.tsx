import { ReactNode, useEffect, useState } from 'react';
import { Container } from './styles';
import Typewritter from 'typewriter-effect';
import ScrollReveal from 'scrollreveal'

interface HomeProps {
  children: ReactNode;
}


export function Home() {
  // const [COUNT, setInit] = useState(0);
  useEffect(() => {
    // ScrollReveal().reveal('.Typewriter', { reset: true, delay: 500 });
    // setInit(true);
  }, []);
  return (
    <Container className='section home'>
      <Typewritter
        onInit={(typewriter: any) => {
          typewriter.typeString("Hello, I'm <span class='name'>Gabriel</span>.👋 I'm a Developer")
            .start();
        }}
      />
    </Container>
  );
}
