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
`;
