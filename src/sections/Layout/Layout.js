import { useState, useEffect, useContext } from "react";

import { Main, Background } from "./Layout.styles";

import Orbit from "../../components/Orbit/Orbit";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <div className="bg-chocolate font-jura">
      <Nav className="absolute top-0 inset-x-0 z-50" />
      <Main className="absolute inset-0">
        <Background className="absolute inset-0 bg-chocolate"></Background>
        <div className="absolute inset-0 border mx-15 my-8 border-blackberry"></div>
        <div className="absolute inset-0 border mx-8 my-15 border-blackberry"></div>

        <div className="fixed h-full w-full left-20 top-100">
          <Orbit className="h-orbit w-500" dark />
        </div>
        <Background className="fixed h-full w-full">
          <div className="absolute left-20 top-100">
            <Orbit className="h-orbit w-500" />
          </div>
        </Background>

        {children}

        <p className="absolute bottom-20 left-22 text-plum text-version opacity-50">v 1.0.0</p>
      </Main>
    </div>
  );
}

export default Layout;
