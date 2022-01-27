import Image from "next/image";
import Construction from "../sections/Construction/Construction";

export default function Home() {
  return (
    <div className="bg-chocolate">
      <main>
        <Construction id="works" />
      </main>
    </div>
  );
}
