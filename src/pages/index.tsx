import { useContext } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

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
    <section className="overflow-auto">
      <div className="relative bg-code-image bg-center bg-no-repeat bg-cover h-[250px] w-full">
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

        <div className="relative flex flex-col gap-10 justify-center items-center h-full z-50 text-left">
          <h1 className="font-header max-w-[350px] tracking-wide">
            I build web apps efficiently with existing solutions.
          </h1>
          <p className="min-w-[350px]">Full Stack Web Developer | Jonacius V.</p>
        </div>
      </div>

      <div className="px-15 mb-40">
        <h2 className="font-header my-20 text-24">My Projects</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            800: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Navigation]}>
          {works.map((work, i) => (
            <SwiperSlide key={i}>
              <button
                className="h-500 w-full bg-blackberry-500 rounded-md shadow-md"
                onClick={() => handleProjectClick(i)}>
                {work.title}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Home;
