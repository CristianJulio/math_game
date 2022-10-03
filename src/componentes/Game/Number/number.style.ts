import styled from "styled-components";

export const NumberWrapper = styled.div`
  aspect-ratio: 1 / 1;
  background: var(--clr-white);
  border-radius: 50%;
  color: var(--clr-orange);
  cursor: pointer;
  font-family: 'Bree Serif', serif;
  font-size: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  width: 14vw;

  @media screen and (max-width: 500px) {
    width: 20vw;
    font-size: 10vw;
  }
`