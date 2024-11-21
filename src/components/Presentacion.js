import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from '../Styles/GlobalStyle';
import { Mainn, Section, Title, Div, I, Button } from "../Styles/Style";

function Presentacion() {
    const navigate = useNavigate();

    return (
        <Mainn>
            <GlobalStyle />
            <Section id="quote-box">
                <Title>Bienvenido al Test</Title>
                <Div texto>
                    <I className="fa fa-quote-left"></I>
                    <span id="text">
                        Este test está diseñado para ayudarte a descubrir en qué nivel se encuentra tu afinidad con la conciencia superior.
                        Te invitamos a honrar ese potencial, alineándote con tu Esencia y participando en la misión de alinearte con tu propio propósito y aportarle al desarrollo de la soberanía energética de la humanidad.
                    </span>
                </Div>
                <Div boton>
                    <Button siguiente id="new-quote" onClick={() => navigate("/cuestionario")}>
                        Empezar el Test
                    </Button>
                </Div>
            </Section>
        </Mainn>
    );
}

export default Presentacion;