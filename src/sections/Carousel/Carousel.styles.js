import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  margin: 0;
  --nav-offset: 80px;

  & > .swiper-wrapper {
    box-sizing: border-box;
    padding-top: 80px;

    @media (min-width: 1024px) {
      padding-bottom: 50px;
      max-height: 800px;
    }
  }

  & > .swiper-pagination {
    z-index: 9999;
    background: #181a21;
    bottom: 0;
    padding: 5px 0;

    --pagination-width: 25px;

    gap: 8px;

    @media (min-width: 1024px) {
      width: var(--pagination-width);
      padding: 30px 0;
      left: calc(100% - var(--pagination-width));
      top: 0;

      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  .custom-swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
    display: inline-block;
    border-radius: 50%;
    background: white;
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.3);
  }

  .custom-swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
  }
`;
