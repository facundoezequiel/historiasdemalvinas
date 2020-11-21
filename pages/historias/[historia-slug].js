import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import styled, { css } from "styled-components";
import Storie from "@/containers/storie";

const HistoriaContainer = styled.div`
  width: 100% !important;
`;

export default function Historias({ data }) {
  return (
    <HistoriaContainer>
      <Storie dataStorie={data}></Storie>
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
  // Para las destacadas no pondria la posicion
  return { props: { data: data[0] } };
}
