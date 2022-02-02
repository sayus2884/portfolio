import Image from "next/image";

import YTEmbedder from "../components/YTEmbedder/YTEmbedder";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";

import Carousel from "../sections/Carousel/Carousel";
import Project from "../sections/Project/Project";
import Works from "../sections/Works/Works";

const works = [
  {
    title: "MyOshis.ch",
    description: [
      "A platform for viewing multiple virtual streamers (Vtubers) from Youtube at the same time. A very convenient way to watch multiple point-of-views when Vtubers do collaboration streams. Currently, the list of Vtubers consist of members from Hololive but in the future will be updated with Nijisanji members and other independent Vtubers.",

      "The frontend is created using NextJs and TailwindCSS; accompanied by other third party libraries such as axios, react-query, and swiper among others, to speed up the development process. The web app is deployed and managed in the Vercel cloud.",

      "The backend is made using Express where its primary function is to fetch and cache the relevant data from the Youtube Data API for the frontend to use. With the Youtube Data API having a cap of 10,000 quotas, the cache functionality greatly reduced the number of times the app has to call the Youtube Data API which enables thousands of users to use the web app without having to worry about data not being transmitted due to the quota reaching its cap. The backend is deployed and managed in Heroku. It faces a cold start when not used after 30 minutes but once fired up, the app will run smoothly.",
    ],
    link: "https://myoshis.ch",
    ytVideoId: "UGEsZHTuJsE",
  },
];

function Home() {
  return (
    <Carousel className="pt-80 pb-50 h-screen mr-0 w-full">
      <Works className="lg:pr-[30%]" />
      <div className="p-50"> stuff here</div>
      <div className="p-50"> stuff here</div>
    </Carousel>
  );
}

export default Home;
