import bg from './assets/bg.jpg'
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${bg});

    @media screen and (max-width: 500px) {
      background: var(--clr-blue);
    }
  }
`
export const GameText = styled.p`
  color: var(--clr-text);
  color: var(--clr-white);
  font-size: 6.5vw;

  @media screen and (max-width: 500px) {
    font-size: 7.1vw;
    text-align: center;
  }
`