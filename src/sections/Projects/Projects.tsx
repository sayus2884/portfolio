import React from "react";

import Project, { ProjectProps } from "../../components/Project/Project";
import { CustomSwiper } from "../Projects/Projects.styles";

import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

interface Props {
  className?: string;
  projects: ProjectProps[];
}

const Projects: React.FC<Props> = ({ className, projects, ...props }) => {
  return (
    <CustomSwiper
      className="h-full"
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}>
      {projects.map((work, i) => (
        <SwiperSlide key={i}>
          <Project {...work} />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default Projects;
