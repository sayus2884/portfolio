import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout/Layout";

import ModalsContext from "../contexts/ModalsContext";

import useWorkModal from "../hooks/use-work-modal";

function MyApp({ Component, pageProps }) {
  const workModalProps = useWorkModal();

  return (
    <ModalsContext.Provider value={workModalProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalsContext.Provider>
  );
}

export default MyApp;
