import styled from "styled-components";

// export const Sun = styled.img`
//   height: ${({ sunSize }) => `${sunSize}px`};
// `;
// export const Rays = styled.img`
//   height: ${({ raySize }) => `${raySize}px`};
// `;
// export const Earth = styled.img`
//   height: ${({ earthSize }) => `${earthSize}px`};
// `;
// export const Moon = styled.img`
//   height: ${({ moonSize }) => `${moonSize}px`};
//   bottom: ${({ moonOffset }) => `-${moonOffset}px`};
// `;

export const Sun = styled.div`
  background: url(${({ dark }) => (dark ? "/images/logo_dark.svg" : "/images/logo.svg")}) no-repeat
    center;
  background-size: contain;
  width: 100%;
  height: 0;
  padding-top: 30%;
`;

export const Rays = styled.div`
  background: url(${({ dark }) => (dark ? "/images/rays_dark.svg" : "/images/rays.svg")}) no-repeat
    center;
  background-size: contain;
  width: 100%;
  height: 0;
  padding-top: 50%;
`;

export const Earth = styled.div`
  background: url(${({ dark }) => (dark ? "/images/earth_dark.svg" : "/images/earth.svg")})
    no-repeat center;
  background-size: contain;
  width: 100%;
  height: 0;
  padding-top: 80%;
`;

export const Moon = styled.div`
  background: url(${({ dark }) => (dark ? "/images/moon_dark.svg" : "/images/moon.svg")}) no-repeat
    center;
  background-size: contain;
  width: 15%;
  height: 0;
  padding-top: 20%;
  bottom: 10%;
  right: 15%;
`;
