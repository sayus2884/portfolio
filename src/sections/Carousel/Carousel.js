import { Children, useState, useEffect, useContext, useRef } from "react";

import { SwiperSlide } from "swiper/react";
import { CustomSwiper } from "./Carousel.styles";
import { Mousewheel, Pagination } from "swiper";

import Nav from "../Nav/Nav";

import NavigationContext from "../../contexts/NavigationContext";

function Carousel({ children, className, ...props }) {
  const { current, navigateTo } = useContext(NavigationContext);
  const swiperRef = useRef();

  // Slide to new index if using dropdown nav
  useEffect(() => {
    if (current !== swiperRef.current.swiper.activeIndex) {
      swiperRef.current.swiper.slideTo(current);
    }
  }, [current]);

  return (
    <CustomSwiper
      ref={swiperRef}
      className={className}
      touchEventsTarget={"container"}
      onSlideChange={({ activeIndex }) => navigateTo(activeIndex)}
      mousewheel={true}
      pagination={{
        type: "bullets",
        clickable: true,
        bulletClass: "custom-swiper-pagination-bullet",
        bulletActiveClass: "custom-swiper-pagination-bullet-active",
        renderBullet: function (index, className) {
          return `<span class="dot  custom-swiper-pagination-bullet"></span>`;
        },
      }}
      modules={[Mousewheel, Pagination]}
      {...props}>
      {Children.map(children, (child, i) => {
        return (
          <SwiperSlide key={i} className="w-full flex justify-end">
            {child}
          </SwiperSlide>
        );
      })}
    </CustomSwiper>
  );
}

export default Carousel;
