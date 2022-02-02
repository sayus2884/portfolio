import YTEmbedder from "../../components/YTEmbedder/YTEmbedder";
import Button from "../../components/Button/Button";

function Project({ title, description, link, technologies }) {
  return (
    <>
      <div className="flex flex-col gap-25">
        <div className="flex justify-between">
          <h2 className="flex items-center gap-10 font-header tracking-widest text-32">
            {title}{" "}
            <span className="font-jura tracking-normal text-base">| {technologies.join(", ")}</span>
          </h2>

          <Button className="w-fit self-end">
            <a href={link} target="_blank">
              Check it out
            </a>
          </Button>
        </div>

        <div className="flex flex-col gap-20">{description[0]}</div>
      </div>
    </>
  );
}

export default Project;
