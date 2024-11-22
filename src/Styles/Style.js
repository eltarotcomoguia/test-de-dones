import styled, { css } from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
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
        width: 90%;
        padding: 2rem 2rem;
    }

    @media (max-width: 480px) {
        padding: 1.5rem 1rem;
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
            width: 90%;
            font-size: 1.5rem;
            margin: auto;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;
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
            width: 90%;
            margin: auto;
            font-size: 1.2rem;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
        }
    `};

    ${props => props.boton && css`
        width: 45rem;
        margin: auto;
        display: flex;
        justify-content: center;
        gap: 1rem;

        @media (max-width: 768px) {
            width: 100%;
            gap: 0.5rem;
        }

        @media (max-width: 480px) {
            align-items: center;
            gap: 0.5rem;
        }
    `};
`


export const I = styled.i`
    font-size: 2.6rem;
    margin-right:1rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }

`


export const Label = styled.label`
    margin-right:1rem;
    margin-left:1rem;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        margin: 0.5rem 0.5rem;
    }
`


export const P = styled.p`

    ${props => props.mens && css`
        font-style: italic;
        font-size: 2.5rem;
    `};
`


export const Input = styled.input`

    ${props => props.radio && css`
        margin-right:0.4rem;
        margin-left:0.4rem;
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
