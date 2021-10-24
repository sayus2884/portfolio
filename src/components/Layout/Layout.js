import { Page } from "./Layout.styles";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
