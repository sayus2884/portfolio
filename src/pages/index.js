import Image from "next/image";

import YTEmbedder from "../components/YTEmbedder/YTEmbedder";

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
    <div className="absolute bg-blackberry max-w-800 w-full right-0 top-40 m-45">
      {works.map(({ title, description, link, ytVideoId }) => (
        <Project title={title} description={description} link={link} ytVideoId={ytVideoId} />
      ))}
    </div>
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

          <button className="absolute bottom-0 right-0 border border-plum text-white p-10 rounded-sm">
            This is a cool button
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
