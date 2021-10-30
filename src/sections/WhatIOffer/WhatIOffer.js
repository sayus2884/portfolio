import { cloneElement } from "react";
import { Container } from "./WhatIOffer.styles";
import { Code, Brain, UsersThree } from "phosphor-react";

const data = [
  {
    image: <Code />,
    title: `Elegant Code`,
    description:
      "I will write clean, easy to read code so it would be easy to maintain, edit, create new feature without breaking existing ones.",
  },
  {
    image: <Brain />,
    title: `Pass Knowledge`,
    description:
      "I will pass on what I know to colleagues, and future developers so new features may be easily createdthe project can be easily maintained",
  },
  {
    image: <UsersThree />,
    title: `Guaranteed Loyalty`,
    description:
      "I will devote all of knowledge, skills, and commitment to the project at hand so that it may become successful",
  },
];

function WhatIOffer(props) {
  return (
    <section
      {...props}
      className="px-55 py-120 bg-midnight text-white flex flex-col items-center justify-center gap-70">
      <h2 className="text-title font-semibold">What I Offer</h2>
      <div className="flex gap-45 max-w-1320">
        {data.map(({ image, title, description }, i) => (
          <Service key={i} icon={image} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}

function Service({ icon, title, description }) {
  const iconProps = {
    className: "h-135 w-135 text-moonlight mb-22",
  };

  return (
    <div className="flex flex-col items-center text-center">
      {cloneElement(icon, iconProps)}
      <h3 className="mb-45 text-32 font-semibold">{title}</h3>
      <p className="text-22">{description}</p>
    </div>
  );
}

export default WhatIOffer;
