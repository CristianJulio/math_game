import styled from "styled-components";

interface SvgWrapperProps {
  bgless?: boolean;
}

export const OperationWrapper = styled.span`
  align-items: center;
  display: flex;
  gap: 0.833vw;
  margin-top: 6.889vh;
`
export const OperationSign = styled.span`
  color: var(--clr-white);
  font-size: 7vw;

  @media screen and (max-width: 500px) {
    font-size: 10vw;
  }
`
export const SvgWrapper = styled.div<SvgWrapperProps>`
  align-content: center;
  background-color: ${({ bgless = false }) => bgless ? "none" : "var(--clr-white)"};
  border-radius: 50%;
  display: flex;
  height: 14vh;
  justify-content: center;
  width: 7vw;

  @media screen and (max-width: 500px) {
    height: 65px;
    width: 65px;
  }

  svg {
    height: 100%;
    width: 100%;
  }
`