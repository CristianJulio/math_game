import styled from "styled-components";

export const PointsWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 1.722vh;
  width: 90%;
`
export const Points = styled.p`
  color: var(--clr-white);
  font-size: 3.3vw;

  @media screen and (max-width: 500px) {
    font-size: 5.5vw;
  }
`