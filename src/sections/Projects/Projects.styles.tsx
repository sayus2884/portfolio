import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  margin: 0;

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

  & > .swiper-button-next,
  .swiper-button-prev {
    font-weight: bold;
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
  }

  & > .swiper-button-next {
    margin-right: 5px;
  }

  & > .swiper-button-prev {
    margin-left: 5px;
  }
`;
