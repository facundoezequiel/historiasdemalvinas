import React from "react";
import { HomeGridContainer } from "./styled";
import Card from "@/components/uikit/card";
import Title from "@/components/uikit/title";
import Button from "@/components/uikit/button";

class HomeGrid extends React.Component {
  render() {
    return (
      <HomeGridContainer name="historias">
        <section>
          <div className="titleButtonsContainer">
            <Title level={3} texto="Últimas historias publicadas"></Title>
            <div>
              <Button
                text="Ver todas"
                backgroundColor="blue"
                design="homeGrid"
              ></Button>
              <Button
                text="Nueva historia"
                backgroundColor="orange"
                design="homeGrid"
              ></Button>
            </div>
          </div>
          <Card
            cardImage="/assets/images/card/Card1.png"
            title="El casco del prisionero"
            date="Sab, Oct 25, 2019"
            abstract="El 11 de mayo dividieron a la compañía en dos: una parte iría a 
            Puerto Howard, la otra a Monte Kent."
            tag="Guerra"
            userImage="/assets/images/profile/Profile1.jpg"
            user="facundo.brahim"
          />
          <Card
            cardImage="/assets/images/card/Card2.jpg"
            title="El buque alemán SMS Scharnhorst"
            date="Jue, Dic 5, 2019"
            abstract="Ocurrió en diciembre de 1914, en los primeros meses de la Primera 
            Guerra Mundial, cerca de las Islas Malvinas."
            tag="Historia"
            userImage="/assets/images/profile/Profile2.jpg"
            user="sofia.hadjilias"
          />
          <Card
            cardImage="/assets/images/card/Card3.jpg"
            title="Volver a encontrarse"
            date="Mie, Mar 11, 2020"
            abstract="Elma Pelozo, madre de Gabino Ruiz Díaz, nunca había podido honrar a 
            su hijo recientemente identificado."
            tag="Homenaje"
            userImage="/assets/images/profile/Profile3.jpg"
            user="agustin.spritzer"
          />
          <Card
            cardImage="/assets/images/card/Card4.jpg"
            title="La brújula del general Moore"
            date="Dom, Abr 1, 2018"
            abstract="Cuando se retiraba abrió una cartuchera de cuero y me dió una brújula 
            sin decirme palabra alguna."
            tag="Guerra"
            userImage="/assets/images/profile/Profile4.jpg"
            user="matias.somonte"
          />
          <Card
            cardImage="/assets/images/card/Card5.png"
            title="Malvinas y Artsaj"
            date="Jue, Abr 2, 2020"
            abstract="Fue durante la Guerra de los 100 años (1337 – 1453) que en Europa se 
            impuso una “revolución militar”."
            tag="Historia"
            userImage="/assets/images/profile/Profile5.jpg"
            user="denise.abecian"
          />
          <Card
            cardImage="/assets/images/card/Card6.png"
            title="Pesca en Malvinas: la nueva batalla"
            date="Lun, Ago 5, 2019"
            abstract="Según el The Financial Times los británicos quieren renegociar los 
            acuerdos por los territorios."
            tag="Actualidad"
            userImage="/assets/images/profile/Profile6.jpg"
            user="alvaro.ramirez"
          />
          <Card
            cardImage="/assets/images/card/Card7.jpg"
            title="Dos hermanos, una guerra"
            date="Mar, Abr 2, 2019"
            abstract="Cuando estalló la guerra, los hermanos Oscar y Augusto Pérez estaban en 
            Campo de Mayo."
            tag="Guerra"
            userImage="/assets/images/profile/Profile7.jpg"
            user="sharon.cazap"
          />
          <Card
            cardImage="/assets/images/card/Card8.jpg"
            title="El heroe del barrio de Flores"
            date="Lun, Mar 30, 2020"
            abstract="Fabián Volonté, ex combatiente de Malvinas, tiene su propia sale en el 
            Museo Barrio de Flores."
            tag="Argentina"
            userImage="/assets/images/profile/Profile8.jpg"
            user="gonzalo.rascon"
          />
        </section>
      </HomeGridContainer>
    );
  }
}

export default HomeGrid;
