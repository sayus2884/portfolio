import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AnimatePresence } from "framer-motion";

import ModalsContext from "../contexts/ModalsContext";
import WorkContext from "../contexts/WorkContext";

import useWorkModal from "../hooks/use-work-modal";
import useWork from "../hooks/use-work";

function MyApp({ Component, pageProps }) {
  const workModalProps = useWorkModal();
  const workProps = useWork();

  return (
    <ModalsContext.Provider value={workModalProps}>
      <WorkContext.Provider value={workProps}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </WorkContext.Provider>
    </ModalsContext.Provider>
  );
}

export default MyApp;
