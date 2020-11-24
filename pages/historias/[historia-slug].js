import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import styled, { css } from "styled-components";
import Storie from "@/containers/storie";

const HistoriaContainer = styled.div`
  width: 100% !important;
`;

export default function Historias({ data, dataUsuario }) {
  return (
    <HistoriaContainer>
      <Storie dataStorie={data} dataUsuario={dataUsuario}></Storie>
    </HistoriaContainer>
  );
}

// Es unicamente utilizable en archivos dentro de pages
export async function getServerSideProps({ params }) {
  // DATA HISTORIA
  const slug = params["historia-slug"];
  const ref = db.collection("historias");
  const data = await ref
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
  // DARA USUARIOS
  const userHistoriaRef = db.collection("usuarios").doc(data[0].usuario);
  const userHistoriaData = await userHistoriaRef
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("no encuentra el doc");
        return [];
      } else {
        console.log("Data usuario historia", doc.data());
        return doc.data();
      }
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
  return { props: { data: data[0], dataUsuario: userHistoriaData } };
}
