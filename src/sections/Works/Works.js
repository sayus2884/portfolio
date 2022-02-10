import { useState, useEffect, useContext, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper";

import Project from "../Project/Project";
import CarouselVideos from "../CarouselVideos/CarouselVideos";

import YTEmbedder from "../../components/YTEmbedder/YTEmbedder";

import NavigationContext from "../../contexts/NavigationContext";

import works from "../../utils/works";

function Carousel({ children, className, ...props }) {
  const [currentWork, setCurrentWork] = useState(works[0]);
  const [currentPlayer, setCurrenPlayer] = useState();
  const { current } = useContext(NavigationContext);
  const youtubeRefArr = [];

  works.forEach((work, i) => {
    youtubeRefArr[i] = useRef();
  });

  useEffect(() => {
    if (!currentPlayer) {
      return;
    }

    if (current !== 0) {
      currentPlayer.stopVideo();
    } else {
      currentPlayer.playVideo();
    }
  }, [current]);

  return (
    <div className={className}>
      <div className="flex flex-col gap-30 px-45 h-full">
        <CarouselVideos
          spaceBetween={30}
          centeredSlides={true}
          onSlideChange={({ realIndex }) => {
            if (currentPlayer) {
              setCurrentWork(works[realIndex]);
              currentPlayer.stopVideo();

              const newCurrentPlayer = youtubeRefArr[realIndex].current;
              newCurrentPlayer.playVideo();
              setCurrenPlayer(newCurrentPlayer);
            }
          }}
          navigation={true}
          modules={[Pagination, Navigation]}>
          {works.map(({ ytVideoId }, i) => {
            return (
              ytVideoId && (
                <YTEmbedder
                  ref={youtubeRefArr[i]}
                  onReady={(event) => {
                    const player = event.target;
                    if (i === 0) {
                      player.playVideo();
                      setCurrenPlayer(player);
                    }

                    youtubeRefArr[i].current = player;
                  }}
                  key={i}
                  index={i}
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
            github={currentWork.github}
            technologies={currentWork.technologies}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
