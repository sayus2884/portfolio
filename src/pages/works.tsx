import { useContext, useEffect, useRef, useState } from "react";

import NavigationContext from "../contexts/NavigationContext";

import works from "../utils/works";
import Projects from "../sections/Projects/Projects";

interface Props {
  className?: string;
}

const Works: React.FC<Props> = ({ className, ...props }) => {
  const [currentWork, setCurrentWork] = useState(works[0]);
  const [currentPlayer, setCurrenPlayer] = useState(null);
  const { current } = useContext(NavigationContext);
  const youtubeRefArr = [];

  works.forEach((work, i) => {
    youtubeRefArr[i] = useRef();
  });

  useEffect(() => {
    if (!currentPlayer) {
      return;
    }

    if (current !== 0) {
      currentPlayer.stopVideo();
    } else {
      currentPlayer.playVideo();
    }
  }, [current]);

  return (
    <section className="flex flex-col gap-10 w-full">
      <div className="h-full">
        <Projects projects={works} />
      </div>
    </section>
  );
};

export default Works;
