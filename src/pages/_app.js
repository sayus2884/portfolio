import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { AnimatePresence } from "framer-motion";

import Layout from "../sections/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
