import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  margin: 0;

  /* & .swiper-wrapper {
    padding: 80px 0;
    box-sizing: border-box;
    left: 30%;
    right: 0;
  } */

  & > .swiper-pagination {
    top: 0;
    bottom: unset;
    align-items: center;
    background: #2a2e3d;
    display: grid;
    grid-auto-flow: column;

    .swiper-pagination-bullet {
      border-radius: 0;
      width: 100%;
      margin: 0;
    }
  }
`;
