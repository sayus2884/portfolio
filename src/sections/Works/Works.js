import { Children, useState, useEffect, useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper";

import Project from "../Project/Project";
import CarouselVideos from "../CarouselVideos/CarouselVideos";

import YTEmbedder from "../../components/YTEmbedder/YTEmbedder";

const works = [
  {
    title: "MyOshis.ch",
    technologies: ["NextJs", "TailwindCSS", "Express", "Youtube Data API"],
    description: [
      "A platform for viewing multiple virtual streamers (Vtubers) from Youtube at the same time. A very convenient way to watch multiple point-of-views when Vtubers do collaboration streams. Currently, the list of Vtubers consist of members from Hololive but in the future will be updated with Nijisanji members and other independent Vtubers.",

      "The frontend is created using NextJs and TailwindCSS; accompanied by other third party libraries such as axios, react-query, and swiper among others, to speed up the development process. The web app is deployed and managed in the Vercel cloud.",

      "The backend is made using Express where its primary function is to fetch and cache the relevant data from the Youtube Data API for the frontend to use. With the Youtube Data API having a cap of 10,000 quotas, the cache functionality greatly reduced the number of times the app has to call the Youtube Data API which enables thousands of users to use the web app without having to worry about data not being transmitted due to the quota reaching its cap. The backend is deployed and managed in Heroku. It faces a cold start when not used after 30 minutes but once fired up, the app will run smoothly.",
    ],
    link: "https://myoshis.ch",
    ytVideoId: "UGEsZHTuJsE",
  },
  {
    title: "MyOshis.ch",
    technologies: ["NextJs", "TailwindCSS", "Express", "Youtube Data API"],
    description: [
      "A platform for viewing multiple virtual streamers (Vtubers) from Youtube at the same time. A very convenient way to watch multiple point-of-views when Vtubers do collaboration streams. Currently, the list of Vtubers consist of members from Hololive but in the future will be updated with Nijisanji members and other independent Vtubers.",

      "The frontend is created using NextJs and TailwindCSS; accompanied by other third party libraries such as axios, react-query, and swiper among others, to speed up the development process. The web app is deployed and managed in the Vercel cloud.",

      "The backend is made using Express where its primary function is to fetch and cache the relevant data from the Youtube Data API for the frontend to use. With the Youtube Data API having a cap of 10,000 quotas, the cache functionality greatly reduced the number of times the app has to call the Youtube Data API which enables thousands of users to use the web app without having to worry about data not being transmitted due to the quota reaching its cap. The backend is deployed and managed in Heroku. It faces a cold start when not used after 30 minutes but once fired up, the app will run smoothly.",
    ],
    link: "https://myoshis.ch",
    ytVideoId: "UGEsZHTuJsE",
  },
];

function Carousel({ children, className, ...props }) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-30 px-45 h-full">
        <CarouselVideos
          spaceBetween={30}
          centeredSlides={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}>
          {works.map(({ ytVideoId }, i) => {
            return (
              ytVideoId && (
                <YTEmbedder videoId={ytVideoId} className="min-h-[200px] flex justify-center" />
              )
            );
          })}
        </CarouselVideos>

        <div className="max-h-[350px] overflow-auto pr-50">
          <Project
            title={works[0].title}
            description={works[0].description}
            link={works[0].link}
            technologies={works[0].technologies}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
