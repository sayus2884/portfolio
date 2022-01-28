import { useState, useEffect, useContext } from "react";

import { Main, Background } from "./Layout.styles";

import Orbit from "../../components/Orbit/Orbit";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <div className="relative bg-chocolate overflow-hidden">
      <Nav className="absolute top-0 inset-x-0 z-50" />
      <Main className="relative h-screen">
        <Background className="absolute inset-0 bg-chocolate"></Background>
        <div className="absolute inset-0 border mx-15 my-8 border-blackberry"></div>
        <div className="absolute inset-0 border mx-8 my-15 border-blackberry"></div>

        <div className="absolute top-300">
          <Orbit className="h-500 w-500" />
          <h1 className="text-white">Jonacius Villamor</h1>
        </div>

        {children}
      </Main>
    </div>
  );
}

export default Layout;
