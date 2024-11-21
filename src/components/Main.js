import React, { useState } from 'react';
//import Preguntas from '../BsDatos/Bd.json';


function Main() {

  // const [contador, setContador] = useState(0);

  /* var frase=[];
   frase[0]=Preguntas.Preguntas[contador];
   var cita=frase[0].pregunta;
 
   const aumentarContador = () => {
     setContador(contador + 1);
   };
 
   const disminuirContador = () => {
     setContador(contador - 1);
   };
 */

  //const frase = [...Preguntas];

  const frase = [
    "¿Percibes energías o “vibraciones” en lugares o personas, incluso antes de interactuar con ellos? "
    ,
    "¿Te sucede a menudo que sabes quién está llamando o texteando antes de mirar el teléfono?"
    ,
    "¿Notas que tu sensaciones físicas o emocionales de advierten de situaciones o que tu intuición te guía con frecuencia en decisiones importantes o en momentos críticos?"
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

    if (indicePregunta < frase.length - 1) {
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
    alert(mensajesActuales.totalSi(totalSi));
  };

  return (
    <main>
      <section>
        <div id='titulo'>
          <h1>Test de Dones</h1>
        </div>
        <div id='preguntas'>
          <span id="text">
            {frase[indicePregunta]}
          </span>
          <form>
            <label htmlFor="p1">
              Si
              <input type='radio' name="respuesta" value="si" onChange={() => manejarRespuesta("si")} checked={respuestas[indicePregunta] === "si"} required />
            </label>
            <label htmlFor="p1">
              No
              <input type='radio' name="respuesta" value="no" onChange={() => manejarRespuesta("no")} checked={respuestas[indicePregunta] === "no"} required />
            </label>
          </form>
          <div id='boton'>
            {indicePregunta > 0 && (
              <button type="button" onClick={anteriorPregunta} style={{ marginRight: "10px" }}>
                Atrás
              </button>
            )}

            {indicePregunta < frase.length - 1 ? (
              <button type="button" onClick={siguientePregunta} style={{ marginRight: "10px" }}>
                Siguiente
              </button>
            ) : (
              <button type="button" onClick={enviarFormulario}>
                Enviar
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
