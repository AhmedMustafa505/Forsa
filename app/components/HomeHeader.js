import React from "react";
import { StatusBar } from "expo-status-bar";

import HeaderBox from "./HeaderBox";
import HeaderAppBar from "./HeaderAppBar";

function HomeHeader(props) {
  return (
    <>
      <StatusBar style="light" />
      <HeaderAppBar />
      <HeaderBox />
    </>
  );
}

export default HomeHeader;
