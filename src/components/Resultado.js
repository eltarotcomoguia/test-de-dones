import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalStyle } from '../Styles/GlobalStyle';
import { Mainn, Section, Title, Div, Button, P } from "../Styles/Style";

function Resultado() {
    const location = useLocation();
    const navigate = useNavigate();
    const totalSi = location.state?.totalSi ?? 0;

    let mensaje = "";
    let m = "";
    if (totalSi > 9) {
        m = "Tienes un potencial espiritual elevado y latente."
        mensaje = "Tu conexión con los reinos sutiles y las energías superiores es fuerte y podría llegar a ser una gran herramienta de vida para ti y para otras personas a través de ti. Eres un candidato ideal para el desarrollo de habilidades espirituales profundas a servicio de la humanidad.";
    } else if (totalSi > 4 && totalSi < 10) {
        m = "Tu potencial espiritual está presente, aunque parcialmente dormido.";
        mensaje = "Estás en sintonía con la conciencia superior, pero algunas barreras aún te limitan. A través de práctica juiciosa y algo de guía y acompañamiento puedes despertar y afinar tu conexión con tu potencial espiritual para contribuir al despertar colectivo y una humanidad más consciente.";
    } else {
        m = "Tu afinidad con lo espiritual es limitada en este momento.";
        mensaje = "Tu camino actualmente parece más enfocado en la experiencia tangible y directa. Si en algún momento sientes el llamado, recuerda que en nosotros encuentras un espacio virtual para explorar estos aspectos y encontrar un equilibrio entre el mundo material y el espiritual.";
    }

    return (
        <Mainn>
            <GlobalStyle />
            <Section id="quote-box">
                <Title>Resultados</Title>
                <Div texto>
                    <P mens>{m}</P>
                    <br />
                    <span>{mensaje}</span>
                    <br />
                    <br />
                    <br />
                    <span>¿Te gustaría desarrollar tus dones? Hemos creado Círculo Veintidós, una comunidad privada para que desarrolles propósito, dones y sensibilidad. Un lugar seguro en internet para desarrollar tu potencial psíquico. <br /> ¿Te resuena? <br /><br />
                        <a
                            href="https://eltarotcomoguia.com/circulo-veintidos/"
                            /*href="https://klouser.app/group/circulo-veintidos"*/
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'blue', textDecoration: 'underline' }}
                        >
                            Click aquí para unirte a la Lista de Espera.
                            {/*Entérate más de Circulo Veintidós, puertas abiertas hasta 27/12 😌.*/}
                        </a>
                    </span>
                    <br />
                    <br />
                    <br />
                    <span>¿Quieres seguir indagando por los dones espirituales? Te regalo un Ebook gratuito sobre el tema, espero lo disfrutes: <br /><br />
                        <a
                            href="https://subscribepage.io/ebook-dones"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'blue', textDecoration: 'underline' }}
                        >
                            Descárgate nuestro libro de dones aquí.
                        </a>
                    </span>
                    <br />
                    <br />
                </Div>
                <Div boton>
                    <Button siguiente onClick={() => navigate("/")}>Volver al cuestionario</Button>
                </Div>
            </Section>
        </Mainn>
    );
}

export default Resultado;