import React from "react";
import { HomeVideoContainer } from "./styled";
import Title from "../../../uikit/title";
import Paragraph from "../../../uikit/paragraph";
import Planet3D from "../../../uikit/3dplanet";

export default function HomeVideo() {
  return (
    <HomeVideoContainer>
      <div className="textContainer">
        <Title level={3} texto="¿Qué pasó el 2 de abril de 1982?"></Title>
        <Paragraph
          size="0.9"
          text="El 2 de abril conmemoramos un nuevo día del veterano y de los caídos en la guerra de Malvinas. 
          Hace casi 200 años, las Malvinas están ocupadas por el Reino Unido y Argentina mantiene su reclamo por 
          soberanía. ¿Qué pasó en 1982? ¿Es posible ratificar, una vez más, la soberanía territorial nacional y 
          cuestionar todo vestigio de colonialismo?"
        ></Paragraph>
        <Paragraph
          size="0.9"
          text="La guerra no dejó más que victimas y perdidas para la Argentina, con el sueño de algun día las islas
          vuelvan a formar parte del territorio nacipnal mediante vías diplomáticas, dentro de un acuerto bilateral entre
          ambos paises deliberantes."
        ></Paragraph>
        <Paragraph
          size="0.9"
          text="Actualmente, el tema es tratado en las ONU (Org. de Naciones Unidas), dentro de su
          comité de descolonización. La Argentina ha presentado proyectos e intenciones de negociacion más una constante
          lucha por la soberania, que no pierde fuerza ante la negación de la ocupación colonial de facta británica
          dentro del territorio argentino."
        ></Paragraph>
      </div>
    </HomeVideoContainer>
  );
}
