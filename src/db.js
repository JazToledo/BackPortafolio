import { connect } from "mongoose";
import { uri } from "./config.js";

const connectDB = async () => {
  try {
    await connect(uri);
    console.log(">>> Conexión con la base de datos exitosa");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
