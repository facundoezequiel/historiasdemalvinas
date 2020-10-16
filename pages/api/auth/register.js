// Importo base de datos de firabase
import { db, auth } from "@/lib/firebase";

export default async (req, res) => {
  const {
    name,
    lastname,
    username,
    dni,
    combatiente,
    email,
    age,
    password,
  } = req.body;

  // Funcion promise que ejcuta un codigo pero no lo hace en el momento, espera a que el modulo de auth de Firabase le diga que es correcto.
  // Las promise se resuelven cuando se completa al funcion y se rechaza cuando se pasa el tiempo o fallo algo.
  await auth
    .createUserWithEmailAndPassword(email, password)
    //Funcion then para cuando se resuelve la promise.
    .then(async (response) => {
      console.log(response);
      // Crear una nueva entrar en la coleccion usuarios con el mismo ID que el de la autenticacion
      return await db
        .collection("usuarios")
        .doc(response.user.uid)
        .set(
          // Genero dentro de un objeto la estructura que aunque algo no se llene quede cargada
          {
            nombre: name,
            apellido: lastname,
            username,
            dni,
            combatiente,
            guardadas: [],
            mail: email,
            historias: [],
            edad: age,
          }
        )
        // Tiro en la consola si se creo o hubo un error y le paso el error
        .then(() => {
          console.log("Usuario creado");
          // Chequeando que si esta todo bien termine el proceso
          res.status(200).json({
            mensaje: "Cree un usuario",
          });
        })
        .catch((error) =>
          console.log("Hubo un error creando el usuario", error)
        );
    })
    //Funciones catch para cuando se rechaza la promise.
    .catch((error) => {
      console.error(error);
      // Returneo el error y si no un error 500
      res.status(error.status || 500).json({
        code: error.code,
        error: error.message,
      });
    });
};
