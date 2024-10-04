"use client";
import React from "react";
import { HashRouter } from "react-router-dom";
import Routing from "./route/Routing";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routing />
      </HashRouter>
    </>
  );
};

export default App;
