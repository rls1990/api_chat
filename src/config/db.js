import mongoose from "mongoose";
import { encrypt, compare } from "../utils/bcrypt.js";
import Usuario from "../models/user.model.js";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/chatdb")
    .then(() => console.log(">>> Conected mongodb"))
    .catch((err) => console.log(err));
};

export const defaultUser = async () => {
  try {
    const userFind = await Usuario.findOne({ nombre: "admin" });
    if (userFind) {
      let isMatch = await compare("admin", userFind.password);
      if (isMatch) {
        console.log("El usuario 1 por defecto ya existe");
      }
    } else {
      const passEncrypt = await encrypt("admin");
      const newUser = new Usuario({
        nombre: "admin",
        password: passEncrypt,
        roll: "admin",
        email: "admin@adminchat.com",
      });
      const saveddu = await newUser.save();
      if (saveddu) console.log("El usuario 1 por defecto ha sido ceado");
    }

    const userFind1 = await Usuario.findOne({ nombre: "admin1" });
    if (userFind1) {
      let isMatch = await compare("admin", userFind.password);
      if (isMatch) {
        console.log("El usuario 2 por defecto ya existe");
      }
    } else {
      const passEncrypt = await encrypt("admin");
      const newUser = new Usuario({
        nombre: "admin1",
        password: passEncrypt,
        roll: "admin",
        email: "admin1@adminchat.com",
      });
      const saveddu = await newUser.save();
      if (saveddu) console.log("El usuario 2 por defecto ha sido ceado");
    }
  } catch (error) {
    console.log(error);
  }
};
