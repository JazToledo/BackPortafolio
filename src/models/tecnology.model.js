import { Schema, model } from "mongoose";

const tecnologySchema = new Schema({
  name: { type: Number },
  icon: { type: Number },
});

const Tecnology = model("Tecnology", tecnologySchema);

export default Tecnology;
