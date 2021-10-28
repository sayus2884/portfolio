import Image from "next/image";
import WhatIOffer from "../sections/WhatIOffer/WhatIOffer";
import Works from "../sections/Works/Works";
import Tools from "../sections/Tools/Tools";

export default function Home() {
  return (
    <div>
      <main>
        <Works />
        <WhatIOffer />
        <Tools />
      </main>
    </div>
  );
}
