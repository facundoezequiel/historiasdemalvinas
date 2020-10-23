// Importo base de datos de firabase
import { db } from "@/lib/firebase";
import cookie from "cookie";

export default async (req, res) => {
  try {
    const { name } = req.body;

    console.log(req.body);

    //Agrego document en la collection de questions (usando firebase con async/await)
    const ref = db.collection("usuarios");

    let id;

    const responseKey = await ref
      .add({
        nombre: name,
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
      name,
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
};
