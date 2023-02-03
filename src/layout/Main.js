import React from "react";
import Last from "../components/Last";
import MainHello from "../components/MainHello";
import Skill from "../components/Skill";
import WhatIDo from "../components/WhatIDo";
import Work1 from "../components/Work1";

function Main() {
  return (
    <main>
      <MainHello />
      <Work1 />
      <WhatIDo />
      <Skill />
      <Last />
    </main>
  );
}

export default Main;
