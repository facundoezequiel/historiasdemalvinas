import React from "react";
import { HomeContainer } from "./styled";
import HomeSearch from "../../components/general/home/homesearch";
import HomeVideo from "../../components/general/home/homevideo";
import HomeDonarPrices from "../../components/general/home/homedonarprices";
import HomeGrid from "../../components/general/home/homegrid";
import Planet3D from "../../components/uikit/3dplanet";
import HomePlanet from "../../components/general/home/homeplanet";

export default function Home() {
  return (
    <HomeContainer>
      <HomeSearch />
      <HomeVideo />
    </HomeContainer>
  );
}
