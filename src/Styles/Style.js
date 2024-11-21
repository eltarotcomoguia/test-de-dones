import styled, { css } from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 3rem; /* Reducir tamaño en pantallas más pequeñas */
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Más pequeño aún para dispositivos muy pequeños */
  }
`;

export const Mainn = styled.main`
    position: relative;
    z-index: 2;
    padding:1rem;
`

export const Section = styled.section`
    border-radius: 0.3rem;
    position: relative;
    width: 45rem;
    padding: 4rem 5rem;
    display: table;
    background-color:white;
    margin: auto;

    @media (max-width: 768px) {
        width: 90%; /* Ajusta el ancho al 90% del viewport */
        padding: 2rem 2rem; /* Reduce el padding */
    }

    @media (max-width: 480px) {
        padding: 1.5rem 1rem; /* Padding más pequeño para móviles */
    }
`

export const Div = styled.div`
    ${props => props.texto && css`
        text-align: center;
        width: 45rem;
        height: auto;
        clear: both;
        font-weight: 500;
        font-size: 2rem;

        @media (max-width: 768px) {
            width: 90%; /* Ancho completo */
            font-size: 1.5rem; /* Reduce el tamaño del texto */
            margin: auto;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem; /* Más pequeño aún para dispositivos móviles */
        }
    `};

    ${props => props.opcion && css`
        width: 45rem;
        height: auto;
        clear: both;
        padding-top: 2rem;
        font-size: 1.5rem;
        text-align: center;

        @media (max-width: 768px) {
      width: 90%; /* Ajustar el ancho */
      margin: auto; /* Centrar las opciones */
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem; /* Reducir aún más el tamaño */
    }
    `};

    ${props => props.boton && css`
        width: 45rem;
        margin: auto;
        display: flex;
        justify-content: center;
        gap: 1rem; /* Espaciado entre botones */

        @media (max-width: 768px) {
      width: 100%;
      gap: 0.5rem; /* Reducir el espacio entre botones */
    }

    @media (max-width: 480px) {
      //flex-direction: column; /* Apilar los botones */
      align-items: center;
      gap: 0.5rem;
    }
    `};
`

export const I = styled.i`
    font-size: 2.6rem;
    margin-right:1rem;

    @media (max-width: 768px) {
        font-size: 2rem; /* Icono más pequeño */
    }

    @media (max-width: 480px) {
        font-size: 1.5rem; /* Más pequeño aún en móviles */
    }

`

export const Label = styled.label`
    margin-right:1rem;
    margin-left:1rem;
    font-size: 1.5rem;

    @media (max-width: 768px) {
    font-size: 1.2rem; /* Reducir tamaño de fuente en tabletas */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Reducir más para dispositivos móviles */
    //display: block; /* Mostrar cada opción en línea separada */
    margin: 0.5rem 0.5rem; /* Agregar espacio entre opciones */
  }

`

export const P = styled.p`

    ${props => props.mens && css`
        font-style: italic;
        font-size: 2.5rem;
    `};
    
`

export const Button = styled.button`

    ${props => props.siguiente && css`
        background-color: rgb(71, 46, 50);
        float: right;
        height: 3.8rem;
        border: none;
        border-radius: 0.3rem;
        color: white;
        outline: none;
        font-size: 1.5rem;
        padding: 0.8rem 1.8rem 0.6rem 1.8rem;
        margin-top: 3rem;
        opacity: 1;
        cursor: pointer;

        @media (max-width: 768px) {
            font-size: 1.2rem;
            padding: 0.6rem 1.5rem;
            margin-top: 2rem;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
            padding: 0.5rem 0.5rem;
        }
    `};

    ${props => props.atras && css`
        background-color: rgb(71, 46, 50);
        float: left;
        height: 3.8rem;
        border: none;
        border-radius: 0.3rem;
        color: white;
        outline: none;
        font-size: 1.5rem;
        padding: 0.8rem 1.8rem 0.6rem 1.8rem;
        margin-top: 3rem;
        opacity: 1;
        cursor: pointer;

        @media (max-width: 768px) {
            font-size: 1.2rem;
            padding: 0.6rem 1.5rem;
            margin-top: 2rem;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
            padding: 0.5rem 0,5rem;
        }
    `};
`;