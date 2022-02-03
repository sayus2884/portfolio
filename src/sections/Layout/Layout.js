import { useState, useEffect, useContext } from "react";

import { Main, Background, Overlay } from "./Layout.styles";

import Orbit from "../../components/Orbit/Orbit";
import Carousel from "../Carousel/Carousel";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <div className="bg-chocolate font-jura text-white">
      <Main className="relative h-full min-h-screen">
        <div className="fixed h-full w-full -left-[600px] -top-[140px]">
          <Orbit className="h-orbit w-orbit" dark />
        </div>
        <Background className="fixed h-full w-full">
          <div className="absolute -left-[600px] -top-[140px]">
            <Orbit className="h-orbit w-orbit" />
          </div>
        </Background>

        <div className="flex justify-end">{children}</div>

        <p className="absolute bottom-10 right-[30px] text-plum text-version_size font-bold opacity-50">
          v 1.1.0
        </p>
      </Main>
    </div>
  );
}

export default Layout;
