import React from "react";
import Story from "@/containers/story";
import { db } from "@/lib/firebase";
import styled, { css } from "styled-components";
import SecondHeader from "@/components/general/secondheader/navbar";
import Headroom from "react-headroom";
import Title from "@/components/uikit/title";
import Image from "@/components/uikit/image";
import Paragraph from "@/components/uikit/paragraph";

const HistoriaContainer = styled.div`
  width: 100% !important;
`;

const HistoriaDataContainer = styled.div`
  width: 100%;
  background-color: var(--gray2);
  padding: 2% 0% 2% 0%;
  border-bottom: 1px solid var(--gray);

  h2 {
    width: 35%;
    margin: 0 auto;
    font-family: "Merriweather", serif !important;
  }
`;

const HistoriaImageAndText = styled.div`
  width: 35%;
  margin: 0 auto;

  img {
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: 0px solid #000000;
    margin-top: 11%;
    margin-bottom: 11%;
  }
`;

const UserAside = styled.aside`
  width: 15%;
  margin: 0% 0% 0% 15%;
  top: 10%;
  float: left;
  position: fixed;
`;

export default function Historias({ data }) {
  let contenidoHistoria = data.contenido.replace(/\\n/g, "\n");
  return (
    <HistoriaContainer>
      <Headroom>
        <SecondHeader />
      </Headroom>
      <HistoriaDataContainer>
        <Title texto={data.titulo} level={2} />
      </HistoriaDataContainer>
      <UserAside>
        <Paragraph size="1" text={data.usuario} design="historia"></Paragraph>
      </UserAside>
      <HistoriaImageAndText>
        <Image imageLink={data.fotohistoria} />
        <Paragraph
          size="1"
          text={contenidoHistoria}
          design="historia"
        ></Paragraph>
      </HistoriaImageAndText>
    </HistoriaContainer>
  );
}

// Es unicamente utilizable en archivos dentro de pages
export async function getServerSideProps({ params }) {
  const slug = params["historia-slug"];
  // Se hace para hacer la referencia una sola vez
  const ref = db.collection("historias");
  const data = await ref
    // Para las destacadas, traigo las que son destacada == true
    .where("slug", "==", slug)
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        return [];
      }
      const dataToSend = [];
      snapshot.forEach(async (doc) => {
        dataToSend.push(await doc.data());
      });
      return dataToSend;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
  console.log(data);
  // Para las destacadas no pondria la posicion
  return { props: { data: data[0] } };
}
