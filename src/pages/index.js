import Image from "next/image";

import YTEmbedder from "../components/YTEmbedder/YTEmbedder";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";

import Project from "../sections/Project/Project";

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
    <Card className="absolute max-w-800 right-0 top-40">
      {works.map(({ title, description, link, ytVideoId }, i) => (
        <Project
          key={i}
          title={title}
          description={description}
          link={link}
          ytVideoId={ytVideoId}
        />
      ))}
    </Card>
  );
}

export default Home;
