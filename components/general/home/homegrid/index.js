import React from "react";
import { HomeGridContainer } from "./styled";
import Card from "@/components/uikit/card";
import Title from "@/components/uikit/title";
import Button from "@/components/uikit/button";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";

export default function HomeGrid({ dataCards }) {
  const { userAuth, userData } = useAuthState();
  return (
    <HomeGridContainer name="historias">
      <section>
        <div className="titleButtonsContainer">
          <Title level={3} texto="Últimas historias publicadas"></Title>
          <div>
            {!userData && !userAuth ? (
              <Button
                text="Ver todas"
                backgroundColor="blue"
                design="homeGrid"
              ></Button>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
        {dataCards.map((h) => {
          return (
            <Card
              title={h.titulo}
              date={h.fecha}
              abstract={h.descripcion}
              tag={h.categoria}
              fotohistoria={h.fotohistoria}
              user={h.usuario}
              slug={h.slug}
            />
          );
        })}
      </section>
    </HomeGridContainer>
  );
}
