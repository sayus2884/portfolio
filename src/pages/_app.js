import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { AnimatePresence } from "framer-motion";

import Layout from "../sections/Layout/Layout";

import ProjectNavigationContext from "../contexts/ProjectNavigationContext";

import useNavigation from "../hooks/use-project-navigation";

function MyApp({ Component, pageProps }) {
  const [projectIndex, navigateTo] = useNavigation();

  return (
    <ProjectNavigationContext.Provider value={{ projectIndex, navigateTo }}>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </ProjectNavigationContext.Provider>
  );
}

export default MyApp;
