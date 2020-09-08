import React from "react";
import { HomeGuerraContainer } from "./styled";
import Title from "../../../uikit/title";
import Paragraph from "../../../uikit/paragraph";
import Image from "../../../uikit/image";

export default function HomeGuerra() {
  return (
    <HomeGuerraContainer>
      <div className="textImageContainer">
        <div className="animationLottie">
          <Image imageLink="./assets/images/home/guerra.webp"></Image>
        </div>
        <div className="textContainer">
          <Title
            level={3}
            texto={["1982: ", <span>El 2 de abril</span>]}
          ></Title>
          <Paragraph
            size="0.9"
            text={[
              "El 2 de abril de 1982, ",
              <span>la dictadura cívico-militar</span>,
              " inició el desembarco de tropas en las islas Malvinas, usurpadas por Inglaterra desde 1833. Con esta acción de afirmación de la soberanía nacional, apoyada por un importante sector de la población, la dictadura intentaba ocultar la gravísima situación social, política y económica a la que había conducido su gobierno. ",
              <br></br>,
              <br></br>,
              "El conflicto armado concluyó el 14 de junio de 1982 con la rendición de la Argentina y provocó ",
              <span>
                la muerte de 649 soldados argentinos, 255 británicos y 3 civiles
                isleños.
              </span>,
              " Se considera que la derrota militar aceleró el fin de la dictadura. El 22 de noviembre de 2000 el gobierno nacional estableció el 2 de Abril como el Día del Veterano y de los Caídos en la guerra de Malvinas.",
              <br></br>,
              <br></br>,
            ]}
          ></Paragraph>
        </div>
      </div>
    </HomeGuerraContainer>
  );
}
