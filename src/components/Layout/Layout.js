import { Page } from "./Layout.styles";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import WorkModal from "../../sections/WorkModal/WorkModal";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
      <WorkModal />
    </div>
  );
}

export default Layout;
