import YTEmbedder from "../../components/YTEmbedder/YTEmbedder";
import Button from "../../components/Button/Button";

function Project({ ytVideoId, title, description, link }) {
  return (
    <>
      {ytVideoId && <YTEmbedder videoId={ytVideoId} className="min-h-youtube rounded-t" />}
      <div className="relative min-h-card_content flex flex-col gap-30 pt-20 pb-30 px-45">
        <div className="flex flex-col gap-10">
          <h2 className="font-header tracking-widest text-32">{title}</h2>

          <div className="flex flex-col gap-20">
            {description.map((text, i) => (
              <p className="text-justify tracking-wide" key={i}>
                {text}
              </p>
            ))}
          </div>
        </div>

        <Button className="w-fit self-end">
          <a href={link} target="_blank">
            Check it out
          </a>
        </Button>
      </div>
    </>
  );
}

export default Project;
