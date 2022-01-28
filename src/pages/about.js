import Image from "next/image";
import Link from "next/link";

import Card from "../components/Card/Card";
import Button from "../components/Button/Button";

function Home() {
  return (
    <Card className="absolute flex flex-col gap-35 justify-center items-center max-w-800 right-0 top-40 m-45 text-white p-55 min-h-card_content">
      <img src="/images/profile.png" className="h-250 rounded-full border-2 border-plum" />

      <p className="text-20 text-center px-55">
        I am but a simple man. I enjoy drawing and watching Hololive EN. I can be obliviously blunt
        and I don't really talk about myself but I do enjoy talking about the possibility of things.
        What I want to do is to create useful things to make myself and everyone else happy and
        satisfied.
      </p>

      <Button>
        <Link href="/contact">Get in touch</Link>
      </Button>
    </Card>
  );
}

export default Home;
