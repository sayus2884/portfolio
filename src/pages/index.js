import Image from "next/image";

import YTEmbedder from "../components/YTEmbedder/YTEmbedder";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";

import Carousel from "../sections/Carousel/Carousel";
import Project from "../sections/Project/Project";
import Works from "../sections/Works/Works";
import About from "../sections/About/About";
import Contact from "../sections/Contact/Contact";

function Home() {
  return (
    <Carousel className="h-screen mr-0 w-full">
      <Works className="max-w-[1050px] w-full h-full bg-blackberry lg:rounded-l-lg pt-20 pb-30" />
      <About className="max-w-[1050px] w-full h-full bg-blackberry lg:rounded-l-lg pt-20 pb-30" />
      <Contact className="max-w-[1050px] w-full h-full bg-blackberry lg:rounded-l-lg pt-20 pb-30" />
    </Carousel>
  );
}

export default Home;
