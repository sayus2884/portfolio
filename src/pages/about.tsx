import React from "react";
import Button from "./../components/Button/Button";

interface Props {
  className?: string;
}

const About: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className="bg-blackberry lg:rounded-l-lg w-full overflow-auto">
      <div className="flex justify-center py-40">
        <div className="flex flex-col gap-45 max-w-650 items-center">
          <img src="/images/profile.png" className="h-200 rounded-full border-2 border-plum" />

          <div className="flex flex-col gap-30">
            <p className="text-16 px-55">
              I believe in not reinventing the wheel. If a solution exists, then I make use of it.
              It is only when you combine these solutions that you can make something innovative.
            </p>

            <p className="text-16 px-55">
              My name is Jonacius Villamor and I am a fullstack developer based in British Columbia,
              Canada. I build web apps with careful thought and efficiency. I enjoy drawing which
              taught me some pretty useful UX/UI techniques such as prototyping and designing,
              making the coding process quick.
            </p>

            <p className="text-16 px-55">
              I like a lot of mediums; from listening to edgy 2000's music to learning new Sci Show
              sciency discoveries to watching cutesy Vtuber streamers, play games. Exposing myself
              to a variety of interesting things give me a lot of perspective on life which inspires
              me to build creative apps.
            </p>

            <p className="text-16 px-55">Ready to work together?</p>
          </div>

          <Button onClick={() => console.log("navigate to contacts")}>Get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
