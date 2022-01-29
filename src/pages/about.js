import Image from "next/image";
import Link from "next/link";

import Card from "../components/Card/Card";
import Button from "../components/Button/Button";

function Home() {
  return (
    <div className="relative right-120">
      <Card className="flex flex-col gap-45 justify-center items-center p-55 lg:min-w-lg_card">
        <img src="/images/profile.png" className="h-200 rounded-full border-2 border-plum" />

        <p className="text-18 text-center px-55">
          I am but a simple man. I enjoy drawing and watching Hololive EN. I can be obliviously
          blunt and I don't really talk much about myself but I do enjoy talking about the
          possibility of things. What I want to do is to create useful things to make myself and
          everyone else happy and satisfied.
        </p>

        <Button>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </Card>
    </div>
  );
}

export default Home;
