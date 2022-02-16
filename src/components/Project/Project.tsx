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
  technologies,
  link,
  github,
  ytVideoId,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-20 overflow-auto h-inherit pb-40" {...props}>
      <div>
        <ImageBanner className="h-[200px] sm:h-[300px] md:h-[450px] bg-red-200" imageUrl={imageUrl}>
          <h2 className="hidden sm:block font-header tracking-widest text-22 md:text-32 p-15 lg:p-40 text-blackberry">
            {title}{" "}
          </h2>
        </ImageBanner>

        <div className="flex flex-col gap-25 px-10 pt-20">
          <div className="flex flex-col gap-20">
            <h2 className="sm:hidden font-header tracking-widest text-22  sm:text-blackberry">
              {title}{" "}
            </h2>
            <p>Made with {technologies.join(", ")}</p>
          </div>

          <div>
            <h3 className="text-22 font-bold">Overview</h3>

            <div className="flex flex-col gap-20">
              {description.map((text, i) => (
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
