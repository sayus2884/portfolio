import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  margin: 0;

  & > .swiper-wrapper {
    box-sizing: border-box;
    right: 0;
  }
`;
