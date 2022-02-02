import YTEmbedder from "../../components/YTEmbedder/YTEmbedder";
import Button from "../../components/Button/Button";

function Project({ title, description, link, technologies }) {
  return (
    <>
      <div className="flex flex-col gap-25">
        <div className="flex justify-between">
          <div>
            <h2 className="font-header tracking-widest text-32">{title} </h2>
            <p>Made with {technologies.join(", ")}</p>
          </div>

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
