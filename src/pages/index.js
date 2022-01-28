import Image from "next/image";

import YTEmbedder from "../components/YTEmbedder/YTEmbedder";
import Card from "../components/Card/Card";

import Construction from "../sections/Construction/Construction";

const works = [
  {
    title: "MyOshis.ch",
    description: ["this a description", "yep this is another description"],
    link: "https://myoshis.ch",
    ytVideoId: "UGEsZHTuJsE",
  },
];

function Home() {
  return (
    <Card className="absolute max-w-800 right-0 top-40 m-45">
      {works.map(({ title, description, link, ytVideoId }) => (
        <Project title={title} description={description} link={link} ytVideoId={ytVideoId} />
      ))}
    </Card>
  );
}

function Project({ ytVideoId, title, description, link }) {
  return (
    <>
      {ytVideoId && <YTEmbedder videoId={ytVideoId} className="min-h-youtube" />}
      <div className="relative min-h-card_content m-20">
        <div className="absolute inset-0">
          <div className="text-white inset-0 h-full pb-55">
            <h2>{title}</h2>

            <div>
              {description.map((text) => (
                <p>{text}</p>
              ))}
            </div>
          </div>

          <a
            href={link}
            target="_blank"
            className="absolute bottom-0 right-0 border border-plum text-plum px-15 py-10 rounded-sm">
            Check it out
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
