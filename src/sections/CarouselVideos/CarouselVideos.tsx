import { Children } from "react";

import { SwiperSlide, SwiperProps } from "swiper/react";
import { CustomSwiper } from "./CarouselVideos.styles";
import { Mousewheel, Pagination, SwiperOptions } from "swiper";

import React from "react";

interface Props extends SwiperOptions, SwiperProps {
  className?: string;
}

const CarouselVideos: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <CustomSwiper
      className={className}
      slidesPerView={"auto"}
      mousewheel={true}
      spaceBetween={550}
      pagination={{
        type: "bullets",
        clickable: true,
        bulletClass: "custom-video-swiper-pagination-bullet",
        bulletActiveClass: "custom-video-swiper-pagination-bullet-active",
        renderBullet: function (index, className) {
          return `<span class="custom-video-swiper-pagination-bullet"></span>`;
        },
      }}
      modules={[Mousewheel, Pagination]}
      {...props}>
      {Children.map(children, (child, i) => {
        return <SwiperSlide className="w-500px">{child}</SwiperSlide>;
      })}
    </CustomSwiper>
  );
};

export default CarouselVideos;
