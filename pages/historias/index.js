import React from "react";
import Stories from "@/containers/stories";
import { db } from "@/lib/firebase";

export default function Historias({ data }) {
  return <Stories dataCards={data} />;
}

export async function getServerSideProps() {
  const ref = db.collection("historias");
  const data = await ref
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
  return { props: { data: data } };
}
