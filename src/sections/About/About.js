import { Children, useState, useEffect, useContext } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper";

import Button from "../../components/Button/Button";

function About({ children, className, ...props }) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-30 justify-center items-center pt-20 pb-30 px-45">
        <img src="/images/profile.png" className="h-200 rounded-full border-2 border-plum" />

        <p className="text-18 text-center px-55">
          I am but a simple man. I enjoy drawing and watching Hololive EN. I can be obliviously
          blunt and I don&apos;t really talk much about myself but I do enjoy talking about the
          possibility of things. What I want to do is to create useful things to make myself and
          everyone else happy and satisfied.
        </p>

        <Button>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  );
}

export default About;
