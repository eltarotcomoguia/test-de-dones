import styled, { css } from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 20px;
`;

export const Mainn = styled.main`
    position: relative;
    z-index: 2;
`

export const Section = styled.section`
    border-radius: 0.3rem;
    position: relative;
    width: 45rem;
    padding: 4rem 5rem;
    display: table;
    background-color:white;
`

export const Div = styled.div`
    ${props => props.texto && css`
        text-align: center;
        width: 45rem;
        height: auto;
        clear: both;
        font-weight: 500;
        font-size: 2rem;
    `};

    ${props => props.opcion && css`
        width: 45rem;
        height: auto;
        clear: both;
        padding-top: 2rem;
        font-size: 1.5rem;
        text-align: center;
    `};

    ${props => props.boton && css`
        width: 45rem;
        margin: auto;
        display: block;
    `};
`

export const I = styled.i`
    font-size: 2.6rem;
    margin-right:1rem;

`

export const Label = styled.label`
    margin-right:1rem;
    margin-left:1rem;

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
    `};
`;
