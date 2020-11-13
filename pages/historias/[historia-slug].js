import Story from "@/containers/story";
import { db } from "@/lib/firebase";

function Historias({ data }) {
  console.log(data);
  return (
    <div>
      <p>{data.titulo}</p>
      <p>{data.usuario}</p>
      <p>{data.descripcion}</p>
      <p>{data.contenido}</p>
    </div>
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

export default Historias;
