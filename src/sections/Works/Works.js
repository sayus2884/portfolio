import { useContext } from "react";
import Image from "next/image";
import { Container } from "./Works.styles";

import ModalsContext from "../../contexts/ModalsContext";
import WorkContext from "../../contexts/WorkContext";

const data = [
  {
    image: "/images/face1.jpg",
    title: `Wonderful 010`,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    technologies: ["Next.js", "styled-components", "Tailwind CSS"],
  },
  {
    image: "/images/face2.jpg",
    title: `Wonderful 010`,
    description:
      "I will write clean, easy to read code so it would be easy to maintain, edit, create new feature without breaking existing ones.",
    technologies: ["Next.js", "styled-components", "Tailwind CSS"],
  },
  {
    image: "/images/face3.jpg",
    title: `Wonderful 010`,
    description:
      "I will write clean, easy to read code so it would be easy to maintain, edit, create new feature without breaking existing ones.",
    technologies: ["Next.js", "styled-components", "Tailwind CSS"],
  },
];

function Works() {
  return (
    <section className="bg-code-image bg-cover justify-center pt-16 h-800">
      <div className="flex justify-center items-center h-full gap-25">
        {data.map(({ image, title, description, technologies }, i) => (
          <Card
            key={i}
            src={image}
            title={title}
            description={description}
            technologies={technologies}
          />
        ))}
      </div>
    </section>
  );
}

function Card({ src, title, description, technologies }) {
  const { openWorkModal } = useContext(ModalsContext);
  const { setSelectedWork } = useContext(WorkContext);

  const handleOnClick = (event) => {
    event.preventDefault();
    setSelectedWork({ src, title, description, technologies });
    openWorkModal();
  };

  return (
    <div className="bg-midnight w-300 h-360 rounded text-white shadow">
      <div className="relative flex flex-col items-center h-full px-25 py-35">
        <div className="relative h-100 w-100 border-moonlight">
          <Image
            className="rounded-full"
            src={src}
            layout="fill"
            blurDataURL={src}
            quality={25}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <h3 className="mt-22 text-20 font-semibold">{title}</h3>
        <p className="text-center mt-12">
          Developed with{" "}
          {technologies.map((tech, i) => (
            <span key={i}>{tech},</span>
          ))}
        </p>
        <button
          onClick={handleOnClick}
          className="text-moonlight border border-moonlight px-10 py-8 rounded absolute bottom-35">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Works;
