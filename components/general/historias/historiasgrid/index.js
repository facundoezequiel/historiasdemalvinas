import React from "react";
import { HistoriasGridContainer } from "./styled";
import Card from "@/components/uikit/card";
import Title from "@/components/uikit/title";
import Button from "@/components/uikit/button";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";
import { default as NextLink } from "next/link";

export default function HistoriasGrid({ dataCards }) {
  const { userAuth, userData } = useAuthState();
  return (
    <HistoriasGridContainer>
      <section>
        <div className="titleButtonsContainer">
          <Title level={3} texto="Historias de Malvinas"></Title>
          <div className="gridButtons">
            <NextLink href="/crear">
              <Button
                text="Nueva historia"
                backgroundColor="orange"
                design="homeGrid"
              ></Button>
            </NextLink>
          </div>
        </div>
        {dataCards.map((h) => {
          return (
            <Card
              title={h.titulo}
              date={h.fecha}
              abstract={h.descripcion}
              tag={h.categoria}
              fotohistoria={
                h && h.fotohistoria
                  ? h.fotohistoria
                  : "/assets/images/placeholder/profile.png"
              }
              user={h.usuario}
              slug={h.slug}
            />
          );
        })}
      </section>
    </HistoriasGridContainer>
  );
}
