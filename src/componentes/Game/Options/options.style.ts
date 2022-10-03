import styled from "styled-components";

export const OptionsWrapper = styled.div`
  display: grid;
  gap: 3.5vw;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  margin-top: 6.889vh;

  @media screen and (max-width: 500px) {
    display: grid;
    gap: 4vw;
    grid-template-columns: repeat(2, 1fr);
  }
`
export const OptionItem = styled.button`
  background-color: var(--clr-orange);
  border-radius: 0.833vw;
  border: none;
  color: var(--clr-white);
  cursor: pointer;
  font-size: 7vw;
  padding: 1.5vw;
  transition: all .2s;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px) {
    padding: 2vh 5vw;
    font-size: 8vw;
    border-radius: 1vw;

    :hover {
      transform: unset
    }
  }
`