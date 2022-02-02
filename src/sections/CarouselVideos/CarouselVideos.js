import { Children, useState, useEffect, useContext } from "react";

import { SwiperSlide } from "swiper/react";
import { CustomSwiper } from "./CarouselVideos.styles";
import { Mousewheel, Pagination } from "swiper";

function CarouselVideos({ children, className, ...props }) {
  return (
    <CustomSwiper
      className={className}
      slidesPerView={"auto"}
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
        return <SwiperSlide className="w-500px">{child}</SwiperSlide>;
      })}
    </CustomSwiper>
  );
}

export default CarouselVideos;
