import styled from "styled-components";

export const GameWrapper = styled.div`
  align-items: center;
  background: var(--clr-blue);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`
export const ResetButton = styled.button`
  background: none;
  border: none;
  bottom: 1.4vw;
  cursor: pointer;
  left: 1.4vw;
  position: fixed;
  background-color: var(--clr-white);
  padding: 1.8vw;
  border-radius: 50%;
  transition: transform .2s;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px) {
    padding: 5vw;
  }
`