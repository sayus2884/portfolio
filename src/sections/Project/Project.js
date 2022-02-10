import { GithubLogo, Browser } from "phosphor-react";

import YTEmbedder from "../../components/YTEmbedder/YTEmbedder";
import Button from "../../components/Button/Button";

function Project({ title, description, link, github, technologies }) {
  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-col gap-25">
        <div className="flex justify-between">
          <div>
            <h2 className="font-header tracking-widest text-32">{title} </h2>
            <p>Made with {technologies.join(", ")}</p>
          </div>
        </div>

        <div className="flex flex-col gap-20">{description[0]}</div>
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
  );
}

export default Project;
