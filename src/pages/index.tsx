import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import Button from "../components/Button/Button";

import works from "../utils/works";

import ProjectNavigationContext from "./../contexts/ProjectNavigationContext";
import { CaretDoubleRight } from "phosphor-react";
import Socials from "./../sections/Socials/Socials";

interface CTAProps {
  className?: string;
}

const CTA: React.FC<CTAProps> = ({ className }) => {
  return (
    <Link href="/works">
      <button
        className={`${className} bg-red-500 text-white px-10 py-5 rounded-md font-bold flex gap-[5px] items-center border border-red-500 hover:bg-red-600 text-blackberry-500 hover:text-white`}>
        View Works <CaretDoubleRight size={20} weight={"bold"} />
      </button>
    </Link>
  );
};

function Home() {
  const { navigateTo } = useContext(ProjectNavigationContext);
  const router = useRouter();

  const handleProjectClick = (index) => {
    navigateTo(index);
    router.push("/works");
  };

  return (
    <section className="overflow-auto lg:bg-code-image w-full">
      <div className="hidden lg:block absolute inset-0 bg-black opacity-60"></div>

      <div className="relative h-full lg:grid lg:grid-cols-2 lg:z-50">
        <div className="relative bg-code-image lg:bg-none bg-center bg-no-repeat bg-cover h-[250px] sm:h-[350px] md:h-[400px] lg:h-full w-full">
          <div className="absolute lg:hidden inset-0 bg-black opacity-20 z-10"></div>

          <div className="relative flex flex-col gap-10 lg:gap-20 justify-center items-center h-full z-50 text-left">
            <h1 className="font-header max-w-[350px] sm:max-w-[450px] tracking-wider lg:tracking-[.2em] sm:tracking-normal sm:text-center md:text-left text-[20px] sm:text-[28px] md:text-[32px] lg:text-[46px] leading-tight">
              I make web apps with <span className="text-red-500">thought</span> &#38;{" "}
              <span className="text-red-500">efficiency</span>
            </h1>
            <p className="min-w-[350px] sm:min-w-[450px] sm:text-center md:text-left text-[12px] sm:text-[17px] md:text-20">
              Full Stack Web Developer | Jonacius V.
            </p>

            <div className="min-w-[450px] flex gap-20 items-center">
              <Socials className="gap-20" size={24} />
              <CTA className="hidden lg:flex p-10" />
            </div>
          </div>
        </div>

        <div className="px-15 lg:pl-0 lg:pr-[80px] pb-40 lg:mb-0 lg:max-w-[800px]">
          <div className="lg:hidden flex justify-between w-full items-center mb-15 mt-35">
            <h2 className="font-header text-24">My Works</h2>
            <CTA className="lg:hidden" />
          </div>

          <div className="flex items-center h-full ">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 3500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                800: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination, Navigation, Autoplay]}>
              {works.map((work, i) => (
                <SwiperSlide key={i}>
                  <Button
                    imageUrl={work.imageUrl}
                    className="relative h-480 w-full bg-blackberry-500 rounded-md shadow-md"
                    onClick={() => handleProjectClick(i)}>
                    <h3 className="absolute top-15 left-0 px-15 py-[5px] font-bold text-16 text-white/80 bg-blackberry-500 rounded-r-md shadow-md">
                      {work.title}
                    </h3>
                  </Button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
