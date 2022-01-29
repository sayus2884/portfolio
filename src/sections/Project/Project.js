import YTEmbedder from "../../components/YTEmbedder/YTEmbedder";
import Button from "../../components/Button/Button";

function Project({ ytVideoId, title, description, link }) {
  return (
    <>
      {ytVideoId && <YTEmbedder videoId={ytVideoId} className="min-h-youtube" />}
      <div className="relative min-h-card_content m-20">
        <div className="absolute inset-0">
          <div className="text-white inset-0 h-full pb-55">
            <h2 className="font-header tracking-widest text-32">{title}</h2>

            <div>
              {description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>

          <Button className="absolute bottom-0 right-0">
            <a href={link} target="_blank">
              Check it out
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Project;
