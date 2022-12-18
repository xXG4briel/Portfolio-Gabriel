import { Button } from "../Button";
import { InputText } from "../InputText";
import { Container } from "./styles";
import ScrollReveal from "scrollreveal";

const info = [
    { icon: 'logo-instagram.svg', info: '@ygabriel.nicodemus', url: "https://www.instagram.com/ygabriel.nicodemus/" },
    { icon: 'logo-whatsapp.svg', info: '11 94087-8419', url: "https://api.whatsapp.com/send?phone=5511940878419&text=" },
    { icon: 'logo-email.svg', info: 'devalves2022@gmail.com', url: "mailto:devalves2022@gmail.com" },
    { icon: 'logo-linkedin.svg', info: 'Gabriel Nicodemus', url: "https://www.linkedin.com/in/gabriel-nicodemus/" },
]

export function Contact() {
    ScrollReveal().reveal(".contact-social-container", {delay: 300, reset: true});
    ScrollReveal().reveal(".contact-social-info", {delay: 600, reset: true});
    ScrollReveal().reveal(".contact-form-container", {delay: 600, reset: true});
    // ScrollReveal().reveal("form>div>fieldset:nth-child(1)", {delay: 300, reset: true});
    // ScrollReveal().reveal("form>div>fieldset:nth-child(2)", {delay: 1500, reset: true});
    // ScrollReveal().reveal("form>fieldset", {delay: 1800, reset: true});
    // ScrollReveal().reveal("form>button", {delay: 1800, reset: true});

    return (
        <Container className="section contact">
            <div>
                <aside className="contact-social-container">
                    <h2>Vamos desenvolver <img src="src/assets/icons/contact_icon.png" alt="" height={36} /> ?</h2>
                    <h5>Me pergunte algo ou diga oi</h5>
                    <article>
                        <ul>
                            {info.map( ({ icon, info, url }) =>
                                <li className="contact-social-info" key={icon}>
                                    <img src={ 'src/assets/icons/' + icon} alt="info url" />
                                    <a href={url} target="_blank">{info}</a>
                                </li>
                            )}
                        </ul>
                    </article>
                </aside>
                <article className="contact-form-container">
                    <form>
                        <div>
                            <InputText name="Nome"/>
                            <InputText name="E-mail" max={120} placeholder="seuemail@email.com" messageInvalid="Formato do e-mail incorreto." type="email"/>
                        </div>
                        <InputText name="Mensagem" placeholder="sua mensagem aqui." textarea={true} rows={5}/>
                        <Button name="enviar" style={ {color: "--primary-main", hover: "--primary-shade"} } />
                    </form>
                </article>
            </div>
        </Container>
    );
}