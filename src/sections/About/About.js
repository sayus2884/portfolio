import Link from "next/link";

import Button from "../../components/Button/Button";

function About({ children, className, ...props }) {
  return (
    <div className={className}>
      <div className="relative flex flex-col gap-30 items-center px-45 h-full overflow-auto">
        <img src="/images/profile.png" className="h-200 rounded-full border-2 border-plum" />

        <p className="text-18 text-center px-55">
          I am a fullstack developer based in British Columbia, Canada. I like to build web apps
          which are very useful and convenient. I do enjoy drawing which taught me some pretty
          useful design and user experience techniques that I incorporate into my projects. I love
          to listen and talk about ideas and possibility of things, hence why I like to watch VTuber
          streamers, documentaries, and great storytelling shows and movies.
        </p>

        <Button>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  );
}

export default About;
