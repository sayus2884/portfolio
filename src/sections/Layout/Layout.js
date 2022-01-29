import { useState, useEffect, useContext } from "react";

import { Main, Background } from "./Layout.styles";

import Orbit from "../../components/Orbit/Orbit";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <div className="bg-chocolate font-jura text-white">
      <Nav className="absolute top-0 inset-x-0 z-50" />
      <Main className="relative h-full min-h-screen">
        <Background className="absolute inset-0 bg-chocolate"></Background>

        <div className="fixed h-full w-full -left-600 -top-140">
          <Orbit className="h-orbit w-orbit" dark />
        </div>
        <Background className="fixed h-full w-full">
          <div className="absolute -left-600 -top-140">
            <Orbit className="h-orbit w-orbit" />
          </div>
        </Background>

        <div className="absolute inset-0 mx-15 my-8 border-blackberry border-2"></div>
        <div className="absolute inset-0 mx-8 my-15 border-blackberry border-2"></div>

        <div className="relative h-full flex justify-end pt-80 pb-50">{children}</div>

        <p className="absolute bottom-20 left-22 text-plum text-version opacity-50">v 1.0.0</p>
      </Main>
    </div>
  );
}

export default Layout;
