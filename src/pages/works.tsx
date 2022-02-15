import { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper";

import Project from "../components/Project/Project";

import NavigationContext from "../contexts/NavigationContext";

import works from "../utils/works";
import CarouselVideos from "../sections/CarouselVideos/CarouselVideos";
import YTEmbedder from "../components/YTEmbedder/YTEmbedder";
import Projects from "../sections/Projects/Projects";

interface Props {
  className?: string;
}

const Works: React.FC<Props> = ({ className, ...props }) => {
  const [currentWork, setCurrentWork] = useState(works[0]);
  const [currentPlayer, setCurrenPlayer] = useState(null);
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
    <section className="flex flex-col gap-10 w-full">
      <div className="h-full">
        <Projects projects={works} />
      </div>
    </section>
  );
};

export default Works;

// <CarouselVideos
//   spaceBetween={30}
//   centeredSlides={true}
//   onSlideChange={({ realIndex }) => {
//     if (currentPlayer) {
//       setCurrentWork(works[realIndex]);
//       currentPlayer.stopVideo();

//       const newCurrentPlayer = youtubeRefArr[realIndex].current;
//       newCurrentPlayer.playVideo();
//       setCurrenPlayer(newCurrentPlayer);
//     }
//   }}
//   modules={[Pagination]}>
//   {works.map(({ ytVideoId }, i) => {
//     return (
//       <div key={i}>
//         {ytVideoId && (
//           <YTEmbedder
//             ref={youtubeRefArr[i]}
//             onReady={(event) => {
//               const player = event.target;
//               if (i === 0) {
//                 player.playVideo();
//                 setCurrenPlayer(player);
//               }

//               youtubeRefArr[i].current = player;
//             }}
//             index={i}
//             videoId={ytVideoId}
//             className="max-w-[70%]"
//             containerClassName="lg:min-h-[250px] flex justify-center"
//           />
//         )}
//       </div>
//     );
//   })}
// </CarouselVideos>
