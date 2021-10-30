import Image from "next/image";
import WhatIOffer from "../sections/WhatIOffer/WhatIOffer";
import Works from "../sections/Works/Works";
import Tools from "../sections/Tools/Tools";
import Contact from "../sections/Contact/Contact";

export default function Home() {
  return (
    <div className="bg-midnight">
      <main>
        <Works />
        <WhatIOffer />
        <Tools />
        <Contact />
      </main>
    </div>
  );
}
