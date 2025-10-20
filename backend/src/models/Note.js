import mongoose, { SchemaType } from "mongoose";

// step 1 - create a Schema
// step 2 - create a model based off of that schema 
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //createdAt , updatedAt
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
