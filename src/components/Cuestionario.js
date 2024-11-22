import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from '../Styles/GlobalStyle';
import { Mainn, Section, Title, Div, I, Button, Label,Input } from "../Styles/Style";

function Cuestionario() {

  const preguntas = [
    "¿Percibes energías o “vibraciones” en lugares o personas, incluso antes de interactuar con ellos? "
    ,
    "¿Te sucede a menudo que sabes quién está llamando o texteando antes de mirar el teléfono?"
    ,
    "¿Notas que tu sensaciones físicas o emocionales te advierten de situaciones o que tu intuición te guía con frecuencia en decisiones importantes o en momentos críticos?"
    ,
    "¿Te ha ocurrido que, en estados de profunda calma, sientes un flujo de información o “mensajes” internos?"
    ,
    "¿Te resulta fácil visualizar colores, formas o energías cuando meditas o te concentras profundamente?"
    ,
    "¿Has tenido experiencias de “déjà vu” tan intensas que pareciera que “revives” algo o reconoces un lugar o situación sin explicación?"
    ,
    "¿Sientes que puedes “sentir” o captar la esencia de una persona sin necesidad de intercambio verbal?"
    ,
    "¿Sientes que tus pensamientos y emociones tienen un impacto inexplicable en los seres y ambientes a tu alrededor? Por ejemplo: si estás feliz, todos se ponen felices."
    ,
    "¿Sientes que puedes conectar con emociones o pensamientos de otras personas de manera casi natural?"
    ,
    "¿Alguna vez has sentido la presencia de seres sutiles o una guía protectora en situaciones difíciles?"
    ,
    "¿Ves horas espejo constantemente? 11:11 3:33 4:44 etc?"
    ,
    "¿Experimentas momentos de gran claridad en los que parece que recibes conocimiento o comprensión “desde otro lugar”?"
    ,
    "¿Tienes sueños vívidos que parecen ser mensajes o guías de otro plano?"
    ,
    "¿Experimentas momentos de sincronía que te llevan a una claridad mayor, como si el universo respondiera directamente a tus preguntas internas: pides una señal y la obtienes?"
    ,
    "¿Te sucede que, sin explicación lógica, sabes o presientes que algo va a ocurrir, y esto se cumple?"
    ,
    "¿Te has sentido atraído desde siempre por temas espirituales, esotéricos o de autoconocimiento, como si fuera un llamado interno?"
    ,
    "¿Alguna vez has sentido que puedes percibir un hilo invisible que te conecta con otros seres de una manera inexplicable, pero innegable?"
    ,
    "¿Tienes la habilidad de calmar tu mente y sintonizar con energías sutiles, como una forma de percepción más allá de los sentidos físicos?"
  ]

  const [indicePregunta, setIndicePregunta] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const navigate = useNavigate();

  const idioma = navigator.language || "es";

  const mensajes = {
    es: {
      seleccionaRespuesta: "Por favor selecciona una respuesta antes de continuar.",
      seleccionaUltima: "Por favor selecciona una respuesta antes de enviar.",
      totalSi: (total) => `Total de respuestas "Sí": ${total}`,
    },
    en: {
      seleccionaRespuesta: "Please select an answer before continuing.",
      seleccionaUltima: "Please select an answer before submitting.",
      totalSi: (total) => `Total "Yes" responses: ${total}`,
    },
  };

  const mensajesActuales = mensajes[idioma.split("-")[0]] || mensajes.es;

  const manejarRespuesta = (respuesta) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[indicePregunta] = respuesta;
    setRespuestas(nuevasRespuestas);
  };

  const siguientePregunta = () => {

    if (!respuestas[indicePregunta]) {
      alert(mensajesActuales.seleccionaRespuesta);
      return;
    }

    if (indicePregunta < preguntas.length - 1) {
      setIndicePregunta(indicePregunta + 1);
    }
  };

  const anteriorPregunta = () => {
    if (indicePregunta > 0) {
      setIndicePregunta(indicePregunta - 1);
    }
  };

  const enviarFormulario = () => {
    if (!respuestas[indicePregunta]) {
      alert(mensajesActuales.seleccionaUltima);
      return;
    }

    const totalSi = respuestas.filter((respuesta) => respuesta === "si").length;
    navigate("/resultado", { state: { totalSi } });
  };

  return (
    <Mainn>
      <GlobalStyle />
      <Section id="quote-box">
        <Title>Test de Dones</Title>
        <Div texto id='preguntas'>
          <I className="fa fa-quote-left"></I>
          <span id="text">
            {preguntas[indicePregunta]}
          </span>
        </Div>
        <form>
          <Div opcion>
            <Label htmlFor="p1">
              Si
              <Input radio type='radio' name="respuesta" value="si" onChange={() => manejarRespuesta("si")} checked={respuestas[indicePregunta] === "si"} required />
            </Label>
            <Label htmlFor="p1">
              No
              <Input radio type='radio' name="respuesta" value="no" onChange={() => manejarRespuesta("no")} checked={respuestas[indicePregunta] === "no"} required />
            </Label>
          </Div>
        </form>
        <Div boton id='boton'>
          {indicePregunta > 0 && (
            <Button atras id="new-quote" type="button" onClick={anteriorPregunta} style={{ marginRight: "10px" }}>
              Atrás
            </Button>
          )}

          {indicePregunta < preguntas.length - 1 ? (
            <Button siguiente id="new-quote" type="button" onClick={siguientePregunta} style={{ marginRight: "10px" }}>
              Siguiente
            </Button>
          ) : (
            <Button siguiente id="new-quote" type="button" onClick={enviarFormulario}>
              Ver Resultados
            </Button>
          )}
        </Div>
      </Section>
    </Mainn>
  );
}

export default Cuestionario;
