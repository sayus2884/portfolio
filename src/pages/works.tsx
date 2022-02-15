import { useContext, useEffect, useRef, useState } from "react";

import ProjectNavigationContext from "../contexts/ProjectNavigationContext";

import works from "../utils/works";
import Projects from "../sections/Projects/Projects";

interface Props {
  className?: string;
}

const Works: React.FC<Props> = ({ className, ...props }) => {
  const [currentPlayer, setCurrenPlayer] = useState(null);
  const { projectIndex } = useContext(ProjectNavigationContext);
  const youtubeRefArr = [];

  works.forEach((work, i) => {
    youtubeRefArr[i] = useRef();
  });

  useEffect(() => {
    if (!currentPlayer) {
      return;
    }

    if (projectIndex !== 0) {
      currentPlayer.stopVideo();
    } else {
      currentPlayer.playVideo();
    }
  }, [projectIndex]);

  return (
    <section className="flex flex-col gap-10 w-full">
      <div className="h-full">
        <Projects projects={works} index={projectIndex} />
      </div>
    </section>
  );
};

export default Works;
