import { useState, useEffect, useContext } from "react";

import { Main, Background } from "./Layout.styles";

import Orbit from "../../components/Orbit/Orbit";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <div className="relative bg-chocolate font-jura">
      <Nav className="absolute top-0 inset-x-0 z-50" />
      <Main className="relative h-screen">
        <Background className="absolute inset-0 bg-chocolate"></Background>
        <div className="absolute inset-0 border mx-15 my-8 border-blackberry"></div>
        <div className="absolute inset-0 border mx-8 my-15 border-blackberry"></div>

        <div className="absolute flex flex-col items-center text-plum">
          <Orbit className="h-500 w-500" />
          <div className="text-center text-apple -mt-35 z-50">
            <h1 className="font-header text-28 tracking-wider">Jonacius Villamor</h1>
            <p className="text-15 leading-none font-header"> Fullstack Web Developer</p>
          </div>
        </div>

        {children}

        <p className="absolute bottom-20 left-22 text-plum text-version opacity-50">v 1.0.0</p>
      </Main>
    </div>
  );
}

export default Layout;
