import styled from "styled-components";

export const Main = styled.main`
  scroll-behavior: smooth;
  background: rgb(255, 186, 167);
  background: linear-gradient(
    155deg,
    rgba(255, 186, 167, 1) 0%,
    rgba(237, 146, 128, 1) 27%,
    rgba(222, 102, 103, 1) 69%,
    rgba(209, 78, 98, 1) 100%
  );
`;

export const Background = styled.div`
  clip-path: polygon(0 0, 30% 0, 84% 100%, 0% 100%);
`;
