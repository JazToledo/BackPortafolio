import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    photo: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Project = model("Project", projectSchema);

export default Project;
