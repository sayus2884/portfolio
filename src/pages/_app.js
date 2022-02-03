import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { AnimatePresence } from "framer-motion";

import Layout from "../sections/Layout/Layout";

import NavigationContext from "../contexts/NavigationContext";

import useNavigation from "../hooks/use-navigation";

function MyApp({ Component, pageProps }) {
  const [current, navigateTo] = useNavigation();

  return (
    <NavigationContext.Provider value={{ current, navigateTo }}>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </NavigationContext.Provider>
  );
}

export default MyApp;
