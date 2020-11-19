// Importo base de datos de firabase
import { db } from "@/lib/firebase";

export default async (req, res) => {
  try {
    const {
      title,
      date,
      user,
      category,
      content,
      abstract,
      imgcover,
      slug,
    } = req.body;

    console.log(req.body);

    //Agrego document en la collection de questions (usando firebase con async/await)
    const ref = db.collection("historias");

    let id;

    const responseKey = await ref
      .add({
        titulo: title,
        fecha: date,
        contenido: content,
        descripcion: abstract,
        usuario: user,
        fotohistoria: imgcover,
        slug: slug,
      })
      .then(function (docRef) {
        id = docRef.id;
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    //Devuelvo el usuario recien creado
    res.status(200).json({
      status: "added",
      id,
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
};
