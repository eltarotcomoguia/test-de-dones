import React from "react";
import { useNavigate } from "react-router-dom";

function Presentacion() {
    const navigate = useNavigate();

    return (
        <main>
            <section>
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    <h1>Bienvenido al Test</h1>
                    <p>
                        Este test está diseñado para ayudarte a descubrir en qué nivel se encuentra tu afinidad con la conciencia superior.
                        Te invitamos a honrar ese potencial, alineándote con tu Esencia y participando en la misión de alinearte con tu propio propósito y aportarle al desarrollo de la soberanía energética de la humanidad.
                    </p>
                    <button
                        style={{
                            padding: "10px 20px",
                            fontSize: "16px",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate("/cuestionario")}
                    >
                        Empezar el Test
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Presentacion;