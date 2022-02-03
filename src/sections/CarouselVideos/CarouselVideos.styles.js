import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  margin: 0;

  & > .swiper-wrapper {
    box-sizing: border-box;
    right: 0;
  }

  .custom-video-swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
    display: inline-block;
    border-radius: 50%;
    background: white;
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.3);
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
  }

  .custom-video-swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
  }
`;
