import React from "react";
import { GithubLogo, Browser } from "phosphor-react";

import YTEmbedder from "../YTEmbedder/YTEmbedder";
import Button from "../Button/Button";
import { ImageBanner } from "./Project.styles";

export interface ProjectProps {
  title: string;
  imageUrl?: string;
  technologies: string[];
  description: string[];
  problems: string[];
  solutions: string[];
  link: string;
  github: string;
  ytVideoId: string;
}

interface Props extends ProjectProps {
  className?: string;
}

const Project: React.FC<Props> = ({
  className,
  imageUrl,
  title,
  description,
  problems,
  solutions,
  technologies,
  link,
  github,
  ytVideoId,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-20 overflow-auto h-inherit pb-40" {...props}>
      <div className="flex flex-col items-center">
        <ImageBanner className="h-[200px] sm:h-[300px] md:h-[450px] w-full" imageUrl={imageUrl}>
          <h2 className="hidden sm:block font-header tracking-widest text-22 md:text-25 lg:text-32 text-white/80 py-10 px-15 mt-30 lg:py-15 lg:px-30 w-fit bg-blackberry rounded-r-md shadow-md">
            {title}{" "}
          </h2>
        </ImageBanner>

        <div className="flex flex-col gap-25 px-20 md:px-45 pt-20 max-w-650 justify-center">
          <div className="flex flex-col gap-10">
            <h2 className="sm:hidden font-header tracking-widest text-22 sm:text-blackberry">
              {title}{" "}
            </h2>
            <p className="text-[14px] opacity-70">Made with {technologies.join(", ")}</p>
          </div>

          <div>
            <h3 className="text-22 font-bold mb-10">Overview</h3>

            <div className="flex flex-col gap-20">
              {description.map((text, i) => (
                <div key={i}>{text}</div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-22 font-bold mb-10">Problems Encountered</h3>

            <div className="flex flex-col gap-10">
              <ul className="list-disc list-inside">
                {problems.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-22 font-bold mb-10">Solutions</h3>

            <div className="flex flex-col gap-20">
              {solutions.map((text, i) => (
                <div key={i}>{text}</div>
              ))}
            </div>
          </div>

          <div className="flex gap-10 w-fit self-end">
            {link && (
              <Button className="w-fit self-end">
                <a href={link} target="_blank" className="flex gap-8 items-center">
                  <Browser weight="bold" />
                  <span>Demo</span>
                </a>
              </Button>
            )}

            {github && (
              <Button className="w-fit self-end">
                <a href={github} target="_blank" className="flex gap-8 items-center">
                  <GithubLogo weight="bold" />
                  <span>Source</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
