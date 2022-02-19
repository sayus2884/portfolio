import React from "react";
import Image from "next/image";

import Socials from "../sections/Socials/Socials";
import Button from "./../components/Button/Button";

interface Props {
  className?: string;
}

const About: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className="bg-blackberry lg:rounded-l-lg w-full overflow-auto">
      <div className="flex justify-center py-40">
        <div className="flex flex-col gap-45 max-w-650 items-center">
          <div>
            <Image
              alt="Picture of developer"
              src="/images/profile.png"
              className="rounded-full border-2 border-red-500"
              height={200}
              width={200}
              priority
            />

            <Socials className="gap-25 justify-center mt-24" size={24} />
          </div>

          <div className="flex flex-col gap-30 px-20 sm:px-45">
            <p className="text-16">
              I believe in not reinventing the wheel. If a solution exists, then I make use of it.
              It is only when you combine these solutions that you can make something innovative.
            </p>

            <p className="text-16">
              My name is Jonacius Villamor and I am a full stack developer based in British
              Columbia, Canada. I build web apps with careful thought and efficiency using
              Typescript, React, and Express. I enjoy drawing which taught me some pretty useful
              UX/UI techniques such as prototyping and designing; making the coding process quick.
            </p>

            <p className="text-16">
              I like a lot of mediums; from listening to edgy 2000&apos;s music to looking into
              amazing illustrations to watching Vtuber streamers, play games. Exposing myself to a
              variety of interesting things give me a lot of perspective of the world around me,
              inspiring me to build apps creatively.
            </p>

            <p className="text-16">Ready to work together?</p>
          </div>

          <Button onClick={() => console.log("navigate to contacts")}>Get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
