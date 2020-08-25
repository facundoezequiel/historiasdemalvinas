import React from "react";
import { HomeContainer } from "./styled";
import HomeSearch from "../../components/general/home/homesearch";
import HomeProyecto from "../../components/general/home/homeproyecto";
import HomeGuerra from "./../../components/general/home/homeguerra";
import HomePlaneta from "./../../components/general/home/homeplaneta";

export default function Home() {
  return (
    <HomeContainer>
      <HomeSearch />
      <HomeProyecto />
      <HomeGuerra />
    </HomeContainer>
  );
}
