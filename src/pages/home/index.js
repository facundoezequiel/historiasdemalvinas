import React from "react";
import { HomeContainer } from "./styled";
import HomeSearch from "../../components/general/home/homesearch";
import HomeProyecto from "../../components/general/home/homeproyecto";
import HomeGuerra from "./../../components/general/home/homeguerra";
import HomeActualidad from "./../../components/general/home/homeactualidad";
import HomePlaneta from "./../../components/general/home/homeplaneta";
import HomeDonar from "./../../components/general/home/homedonarprices";

export default function Home() {
  return (
    <HomeContainer>
      <HomeSearch />
      <HomeProyecto />
      <HomeGuerra />
      <HomeActualidad />
      <HomePlaneta />
      <HomeDonar />
    </HomeContainer>
  );
}
