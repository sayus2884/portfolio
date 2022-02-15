import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  margin: 0;

  & .swiper-wrapper {
    padding: 80px 0;
    box-sizing: border-box;
    left: 30%;
    right: 0;
  }

  & .swiper-pagination {
    --pagination-width: 25px;
    width: var(--pagination-width);
    left: calc(100% - var(--pagination-width));
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    padding: 30px 0;
    background: #181a21;
  }
`;
