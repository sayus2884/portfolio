import React from "react";
import { GithubLogo, Browser } from "phosphor-react";

import YTEmbedder from "../YTEmbedder/YTEmbedder";
import Button from "../Button/Button";

export interface ProjectProps {
  title: string;
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
        <div className="h-[250px] bg-red-200">yt video</div>

        <div className="flex flex-col gap-25 px-10">
          <div className="flex justify-between">
            <div>
              <h2 className="font-header tracking-widest text-32">{title} </h2>
              <p>Made with {technologies.join(", ")}</p>
            </div>
          </div>

          <div className="flex flex-col gap-20">
            {description.map((text, i) => (
              <div key={i}>{text}</div>
            ))}
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
