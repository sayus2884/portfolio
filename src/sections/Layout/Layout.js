import { useState, useEffect, useContext } from "react";

import { Main, Background, Overlay } from "./Layout.styles";

import Orbit from "../../components/Orbit/Orbit";
import Carousel from "../Carousel/Carousel";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <div className="bg-chocolate font-jura text-white">
      <Main className="relative h-full min-h-screen">
        <Background className="absolute inset-0 bg-chocolate"></Background>

        <div className="fixed h-full w-full -left-[600px] -top-[140px]">
          <Orbit className="h-orbit w-orbit" dark />
        </div>
        <Background className="fixed h-full w-full">
          <div className="absolute -left-[600px] -top-[140px]">
            <Orbit className="h-orbit w-orbit" />
          </div>
        </Background>

        <div className="flex justify-end">
          <Carousel className="pt-80 pb-50 h-screen mr-0 w-full">
            <div className="p-50"> stuff here</div>
            <div className="p-50"> stuff here</div>
            <div className="p-50"> stuff here</div>
          </Carousel>
        </div>

        <p className="absolute bottom-20 right-[24px] text-chocolate text-version font-bold">
          v 1.1.0
        </p>
      </Main>
    </div>
  );
}

export default Layout;
