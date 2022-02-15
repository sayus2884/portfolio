import { Main } from "./Layout.styles";

import Nav from "../Nav/Nav";
import NavMobile from "../NavMobile/NavMobile";

function Layout({ children }) {
  return (
    <div className="bg-chocolate font-jura text-white">
      <Main className="relative h-full min-h-screen">
        <Nav className="fixed w-full top-0 bg-blackberry-500 h-64 px-10 border-b border-blackberry-600" />

        <div className="flex bg-blackberry h-screen text-white py-64 md:pb-0">{children}</div>

        <p className="hidden absolute bottom-10 right-[30px] text-plum text-version_size font-bold opacity-50">
          v 1.1.0
        </p>
      </Main>

      <NavMobile className="fixed w-full bottom-0 bg-blackberry-500 z-50 shadow-md border-t border-blackberry-600 md:hidden" />
    </div>
  );
}

export default Layout;
