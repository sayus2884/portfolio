import { useContext, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { VARIANTS, staggerOptions } from "../utils/animations";

import ProjectNavigationContext from "../contexts/ProjectNavigationContext";

import works from "../utils/works";
import Projects from "../sections/Projects/Projects";

interface Props {
  className?: string;
}

const Works: React.FC<Props> = ({ className, ...props }) => {
  const { projectIndex } = useContext(ProjectNavigationContext);

  return (
    <section className="flex flex-col gap-10 w-full">
      <div className="h-full">
        <Projects projects={works} index={projectIndex + 1} />
      </div>
    </section>
  );
};

export default Works;
