import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  VARIANTS,
  scaleDownVariants,
  easeInBottomVariants,
  staggerOptions,
} from "../../utils/animations";

import { useRouter } from "next/router";
import Button from "../../components/Button/Button";
import Image from "next/image";

function Nav({ className, ...props }) {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);
  const routes = [
    { name: "Works", route: "/works" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
  ];

  const handleNavigation = (route) => {
    setActive(route);
    router.push(route);
  };

  useEffect(() => {
    routes.forEach(({ route }) => {
      router.prefetch(route);
    });
  }, []);

  return (
    <motion.section
      className={`${className} flex flex-row justify-between items-center z-50 md:px-20 lg:px-60 xl:px-80`}
      variants={staggerOptions()}
      initial={VARIANTS.CLOSED}
      animate={VARIANTS.OPEN}>
      <motion.div
        className="flex space-x-8"
        animate={VARIANTS.OPEN}
        initial={VARIANTS.CLOSED}
        variants={scaleDownVariants}>
        <button onClick={() => handleNavigation("/")}>
          <Image src="/logo.svg" width={32} height={32} priority className="cursor-pointer" />
        </button>
      </motion.div>

      <nav>
        <ul className="flex gap-30 lg:gap-40 justify justify-end font-bold items-center">
          {routes.map(({ name, route }, i) => (
            <motion.li key={i} variants={easeInBottomVariants}>
              <button
                className={`tracking-wide text-16  hidden md:block ${
                  active === route ? "text-red-500" : "hover:text-white hover:opacity-70"
                }`}
                onClick={() => handleNavigation(route)}>
                {name}
              </button>
            </motion.li>
          ))}
          <motion.li variants={easeInBottomVariants}>
            <Button>Resume</Button>
          </motion.li>
        </ul>
      </nav>
    </motion.section>
  );
}

export default Nav;
