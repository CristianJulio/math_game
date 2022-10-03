import styled from "styled-components";

export const StartWrapper = styled.div`
  align-items: center;
  bottom: 9.687vh;
  display: flex;
  flex-direction: column;
  left: 9.375vw;
  position: fixed;
  width: fit-content;

  @media screen and (max-width: 500px) {
    left: 0;
    top: 20vh;
    width: 100%;
  }
`
export const TitleStart = styled.h3`
  color: var(--clr-white);
  font-size: var(--fs-64);
  text-transform: uppercase;

  @media screen and (max-width: 500px) {
    font-size: 20vw;
    text-align: center;
    width: 100%;
    margin-bottom: 10vh;
  }
`
export const PlayWrapper = styled.button`
  align-items: center;
  aspect-ratio: 1 / 1;
  background-color: var(--clr-white);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all .2s;
  width: 10.416vw;

  :hover {
    transform: scale(1.1);
  }

  svg {
    height: 18.6vh;
    margin-left: 1vw;
    width: 9vw;

    @media screen and (max-width: 500px) {
      width: 50vw;
      margin-left: 5vw;
    }
  }

  @media screen and (max-width: 500px) {
    width: 60vw;
    height: 26vh;
    animation: move .8s infinite alternate;
  }
`