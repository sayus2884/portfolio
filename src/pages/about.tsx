import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  VARIANTS,
  staggerOptions,
  scaleUpVariants,
  easeInRightVariants,
} from "../utils/animations";

import Socials from "../sections/Socials/Socials";
import Button from "./../components/Button/Button";

interface Props {
  className?: string;
}

const About: React.FC<Props> = () => {
  return (
    <motion.div
      className="bg-blackberry lg:rounded-l-lg w-full overflow-auto"
      variants={staggerOptions({ delay: 0.4 })}
      initial={VARIANTS.CLOSED}
      animate={VARIANTS.OPEN}>
      <div className="flex justify-center py-40">
        <div className="flex flex-col gap-45 max-w-650 items-center">
          <div>
            <motion.div variants={scaleUpVariants}>
              <Image
                alt="Picture of developer"
                src="/images/profile.png"
                className="rounded-full border-2 border-red-500"
                height={200}
                width={200}
                priority
              />
            </motion.div>

            <Socials className="gap-25 justify-center mt-24" size={24} />
          </div>

          <div className="flex flex-col gap-30 px-20 sm:px-45">
            <motion.p className="text-16" variants={easeInRightVariants}>
              I believe in not reinventing the wheel. If a solution exists, then I make use of it.
              It is only when you combine these solutions that you can make something innovative.
            </motion.p>

            <motion.p className="text-16" variants={easeInRightVariants}>
              My name is Jonacius Villamor and I am a full stack developer based in British
              Columbia, Canada. I build web apps with careful thought and efficiency using
              Typescript, React, and Express. I enjoy drawing which taught me some pretty useful
              UX/UI techniques such as prototyping and designing; making the coding process quick.
            </motion.p>

            <motion.p className="text-16" variants={easeInRightVariants}>
              I like a lot of mediums; from listening to edgy 2000&apos;s music to looking into
              amazing illustrations to watching Vtuber streamers, play games. Exposing myself to a
              variety of interesting things give me a lot of perspective of the world around me,
              inspiring me to build apps creatively.
            </motion.p>

            <motion.p className="text-16" variants={easeInRightVariants}>
              Ready to work together?
            </motion.p>
          </div>

          <Button
            onClick={() => console.log("navigate to contacts")}
            variants={easeInRightVariants}>
            Get in touch
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
