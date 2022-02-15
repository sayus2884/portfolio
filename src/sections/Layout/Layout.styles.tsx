import styled from "styled-components";

export const Main = styled.main`
  scroll-behavior: smooth;
  background: rgb(255, 186, 167);
  background: linear-gradient(
    rgba(255, 186, 167, 1) 0%,
    rgba(237, 146, 128, 1) 25%,
    rgba(222, 102, 103, 1) 50%,
    rgba(209, 78, 98, 1) 100%
  );
`;

export const Background = styled.div`
  clip-path: polygon(0 35%, 100% 75%, 100% 100%, 0% 100%);
  background-image: url("/images/noise.png");
`;
