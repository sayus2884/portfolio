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
      spaceBetween={550}
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      {...props}>
      <Nav className="absolute w-full top-0 z-50" />

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
