import { useContext } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import Button from "../components/Button/Button";

import works from "../utils/works";

import ProjectNavigationContext from "./../contexts/ProjectNavigationContext";

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
            <h1 className="font-header max-w-[350px] md:max-w-[450px] tracking-wider lg:tracking-[.2em] sm:tracking-normal text-[20px] md:text-[32px] lg:text-[46px] leading-tight">
              I make web apps with <span className="text-red-500">thought</span> &#38;{" "}
              <span className="text-red-500">efficiency</span>
            </h1>
            <p className="min-w-[350px] md:min-w-[450px] text-[12px] sm:text-[16px] md:text-20">
              Full Stack Web Developer | Jonacius V.
            </p>
          </div>
        </div>

        <div className="px-15 lg:pl-0 lg:pr-[80px] pb-40 lg:mb-0 lg:max-w-[800px]">
          <h2 className="lg:hidden font-header my-20 text-24">My Works</h2>

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
                    className="relative h-500 w-full bg-blackberry-500 rounded-md shadow-md"
                    onClick={() => handleProjectClick(i)}>
                    <h3 className="absolute top-15 left-0 px-15 py-[5px] text-blackberry font-bold text-16 text-white/80 bg-blackberry-500 rounded-r-md shadow-md">
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
