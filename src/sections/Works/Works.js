import { Children, useState, useEffect, useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper";

import Project from "../Project/Project";
import CarouselVideos from "../CarouselVideos/CarouselVideos";

import YTEmbedder from "../../components/YTEmbedder/YTEmbedder";

import works from "../../utils/works";

function Carousel({ children, className, ...props }) {
  const [currentWork, setCurrentWork] = useState(works[0]);

  return (
    <div className={className}>
      <div className="flex flex-col gap-30 px-45 h-full">
        <CarouselVideos
          spaceBetween={30}
          centeredSlides={true}
          onSlideChange={({ realIndex }) => setCurrentWork(works[realIndex])}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}>
          {works.map(({ ytVideoId }, i) => {
            return (
              ytVideoId && (
                <YTEmbedder
                  key={i}
                  videoId={ytVideoId}
                  className="max-w-[70%]"
                  containerClassName="lg:min-h-[250px] flex justify-center"
                />
              )
            );
          })}
        </CarouselVideos>

        <div className="overflow-auto pr-50">
          <Project
            title={currentWork.title}
            description={currentWork.description}
            link={currentWork.link}
            technologies={currentWork.technologies}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
