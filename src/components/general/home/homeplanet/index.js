import React from "react";
import { HomePlanetContainer } from "./styled";
import Title from "./../../../uikit/title";
import Image from "./../../../uikit/image";
import Paragraph from "../../../uikit/paragraph";

export default function HomePlanet() {
  return (
    <HomePlanetContainer>
      <div className="warInfoContainer">
        <section>
          <div>
            <Title level={4} texto="1687" />
            <Paragraph text="Heridos" size="0.8" />
          </div>
          <div>
            <Title level={4} texto="649" />
            <Paragraph text="Caidos" size="0.8" />
          </div>
          <div>
            <Title level={4} texto="23.000" />
            <Paragraph text="Combatientes" size="0.8" />
          </div>
          <div>
            <Title level={4} texto="Argentina" />
            <Paragraph text="América del Sur" size="0.8" />
          </div>
          <Image imageLink="./assets/images/flags/argentina.png" size="13" />
        </section>
        <div class="vl"></div>
        <section className="reinoUnidoDiv">
          <Image imageLink="./assets/images/flags/reinounido.png" size="13" />
          <div>
            <Title level={4} texto="R. Unido" />
            <Paragraph text="Europa" size="0.8" />
          </div>
          <div>
            <Title level={4} texto="23.000" />
            <Paragraph text="Combatientes" size="0.8" />
          </div>
          <div>
            <Title level={4} texto="255" />
            <Paragraph text="Caidos" size="0.8" />
          </div>
          <div>
            <Title level={4} texto="775" />
            <Paragraph text="Heridos" size="0.8" />
          </div>
        </section>
      </div>
    </HomePlanetContainer>
  );
}
