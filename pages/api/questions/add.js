import auth0 from "@/lib/auth0";
// Importo base de datos de firabase
import { db } from "@/lib/firebase";

export default async (req, res) => {
  try {
    const { name } = req.body;

    // //Add auth0
    // const session = await auth0.getSession(req);
    // if (!session || !session.user) {
    //   res.writeHead(302, {
    //     Location: "@/pages/api/login",
    //   });
    //   res.end();
    //   return;
    // }

    // const { user } = session;
    // const { name: username } = user;

    //Agrego document en la collection de questions (usando firebase con async/await)
    const responseKey = await db
      .collection("usuarios")
      .push({
        nombre: name
      })
      .getKey();

    //Devuelvo el usuario recien creado
    res.status(200).json({
      status: "added",
      id: responseKey,
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
