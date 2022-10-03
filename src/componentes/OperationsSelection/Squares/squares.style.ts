import styled from "styled-components";

export const SquaresWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
`
export const Square = styled.button`
  background: var(--clr-white);
  border-radius: 0.416vw;
  border: none;
  cursor: pointer;
  padding: 1rem;
  transition: all .2s;

  :hover {
    transform: scale(1.1);
  }
`