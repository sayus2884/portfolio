import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";

import works from "../utils/works";

function Home() {
  return (
    <section className="flex flex-col gap-10 w-full">
      <div className="overflow-auto">
        <div className="relative bg-code-image bg-center bg-no-repeat bg-cover  h-[250px] w-full">
          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

          <div className="relative flex flex-col gap-10 justify-center items-center h-full z-50 text-left">
            <h1 className="font-header max-w-[350px] tracking-wide">
              I build web apps efficiently with existing solutions.
            </h1>
            <p className="min-w-[350px]">Full Stack Web Developer | Jonacius V.</p>
          </div>
        </div>

        <div className="p-10">
          <h2 className="font-header mb-10">My Projects</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Navigation]}>
            {works.map((work, i) => (
              <SwiperSlide key={i}>
                <div className="h-500 w-full bg-red-500">project</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Home;
