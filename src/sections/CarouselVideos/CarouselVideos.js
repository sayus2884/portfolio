import { Children } from "react";

import { SwiperSlide } from "swiper/react";
import { CustomSwiper } from "./CarouselVideos.styles";
import { Mousewheel, Pagination } from "swiper";

function CarouselVideos({ children, className, ...props }) {
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
}

export default CarouselVideos;
