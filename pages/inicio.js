import React from "react";
import Home from "@/containers/home";
import { db } from "@/lib/firebase";

export default function Inicio() {
  return <Home />;
}

export async function getServerSideProps() {
  const ref = db.collection("historias");
  const data = await ref
    .where("destacada", "==", true)
    // Limita la cantidad que trae
    .limit(8)
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
  return { props: { data: data } };
}
