import { useCallback, useState } from "react";

const UseWork = () => {
  const [selectedWork, setSelectedWork] = useState({
    src: "/images/face1.jpg",
    title: `Wonderful 010`,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    technologies: [
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "styled-components", url: "https://styled-components.com/" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    ],
  });

  return { selectedWork, setSelectedWork };
};

export default UseWork;
