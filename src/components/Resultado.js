import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Resultado() {
    const location = useLocation();
    const navigate = useNavigate();
    const totalSi = location.state?.totalSi ?? 0;

    let mensaje = "";
    let m="";
    if (totalSi > 9) {
        m="Tienes un potencial espiritual elevado y latente."
        mensaje = "Tu conexión con los reinos sutiles y las energías superiores es fuerte y podría llegar a ser una gran herramienta de vida para ti y para otras personas a través de ti. Eres un candidato ideal para el desarrollo de habilidades espirituales profundas a servicio de la humanidad.";
    } else if (totalSi > 4 && totalSi < 10) {
        m="Tu potencial espiritual está presente, aunque parcialmente dormido.";
        mensaje = "Estás en sintonía con la conciencia superior, pero algunas barreras aún te limitan. A través de práctica juiciosa y algo de guía y acompañamiento puedes despertar y afinar tu conexión con tu potencial espiritual para contribuir al despertar colectivo y una humanidad más consciente.";
    } else {
        m="Tu afinidad con lo espiritual es limitada en este momento.";
        mensaje = "Tu camino actualmente parece más enfocado en la experiencia tangible y directa. Si en algún momento sientes el llamado, recuerda que en nosotros encuentras un espacio virtual para explorar estos aspectos y encontrar un equilibrio entre el mundo material y el espiritual.";
    }

    return (
        <main>
            <section>
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    <h1>Resultados</h1>
                    <p>{m}</p>
                    <p>{mensaje}</p>
                    <span>¿Quieres seguir indagando por los dones espirituales? Te regalo un Ebook gratuito sobre el tema, espero lo disfrutes: <br/>link a la landing del ebook.</span>
                    <span>¿Te gustaría desarrollar tus dones? Hemos creado Círculo Veintidós, una comunidad privada para que desarrolles propósito, dones y sensibilidad. Un lugar seguro en internet para desarrollar tu potencial psíquico. <br/> ¿Te resuena? <br/>Clic aquí para unirte a la Lista de Espera.</span>
                    <button onClick={() => navigate("/")}>Volver al cuestionario</button>
                </div>
            </section>
        </main>
    );
}

export default Resultado;