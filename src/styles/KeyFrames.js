import styled, { keyframes } from "styled-components";

export const fadeUp = keyframes`
  0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
`;
