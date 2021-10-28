import Image from "next/image";
import { Container } from "./Tools.styles";

import html from "../../../public/images/tools/html5.png";
import css from "../../../public/images/tools/css3.png";
import js from "../../../public/images/tools/js.png";
import react from "../../../public/images/tools/react.png";
import next_white from "../../../public/images/tools/next_white.png";
import node_white from "../../../public/images/tools/node_white.png";
import express_white from "../../../public/images/tools/express_white.png";
import mongo_white from "../../../public/images/tools/mongo_white.png";
import framer from "../../../public/images/tools/framer.png";
import git from "../../../public/images/tools/git.png";

const tools = [
  html,
  css,
  js,
  react,
  next_white,
  node_white,
  express_white,
  mongo_white,
  framer,
  git,
];

function Tools() {
  return (
    <section className="bg-midnight flex flex-col justify-center items-center text-white px-55 py-120">
      <h2 className="text-title mb-12">Known Tools</h2>
      <p className="mb-70">I am capable of transitioning to other technologies as well.</p>
      <div className="flex flex-wrap justify-center items-center h-full gap-120">
        {tools.map((tool, i) => (
          <Card key={i} src={tool} />
        ))}
      </div>
    </section>
  );
}

function Card({ src }) {
  return (
    <div className="relative h-180 border-moonlight">
      <Image src={src} blurDataURL={src} quality={25} />
    </div>
  );
}

export default Tools;
