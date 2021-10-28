import Image from "next/image";
import WhatIOffer from "../sections/WhatIOffer/WhatIOffer";
import Works from "../sections/Works/Works";

export default function Home() {
  return (
    <div>
      <main>
        <Works />
        <WhatIOffer />
      </main>
    </div>
  );
}
