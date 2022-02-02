import { Children, useState, useEffect, useContext } from "react";

import { SwiperSlide } from "swiper/react";
import { CustomSwiper } from "./Carousel.styles";
import { Mousewheel, Pagination } from "swiper";

function Carousel({ children, className, ...props }) {
  return (
    <CustomSwiper
      className={className}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      mousewheel={true}
      spaceBetween={550}
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      {...props}>
      {Children.map(children, (child, i) => {
        return (
          <SwiperSlide className="h-500 min-w-[750px] w-full bg-blackberry rounded-l-lg">
            {child}
          </SwiperSlide>
        );
      })}
    </CustomSwiper>
  );
}

export default Carousel;
