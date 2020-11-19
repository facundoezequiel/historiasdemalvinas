import Create from "@/containers/create";
import { db } from "@/lib/firebase";

export default function Crear({ categorias }) {
  return <Create categorias={categorias} />;
}

// Recibe las categorias de las historias
export async function getServerSideProps({ params }) {
  const ref = db.collection("categorias");
  const data = await ref
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        return [];
      }
      const dataToSend = [];
      snapshot.forEach(async (doc) => {
        const data = await doc.data();
        dataToSend.push({ ...data, id: doc.ref.id });
      });
      return dataToSend;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
  return { props: { categorias: data } };
}
