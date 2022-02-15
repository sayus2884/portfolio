import About from "../sections/About/About";

import React from "react";

interface Props {
  className?: string;
}

const about: React.FC<Props> = ({ className, ...props }) => {
  return (
    <About className="max-w-[1050px] w-full h-full bg-blackberry lg:rounded-l-lg pt-20 pb-30" />
  );
};

export default about;
