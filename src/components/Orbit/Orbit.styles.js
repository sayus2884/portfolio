import styled from "styled-components";

export const Sun = styled.img`
  height: ${({ sunSize }) => `${sunSize}px`};
`;
export const Rays = styled.img`
  height: ${({ raySize }) => `${raySize}px`};
`;
export const Earth = styled.img`
  height: ${({ earthSize }) => `${earthSize}px`};
`;
export const Moon = styled.img`
  height: ${({ moonSize }) => `${moonSize}px`};
  bottom: ${({ moonOffset }) => `-${moonOffset}px`};
`;
