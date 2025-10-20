import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({createdAt:-1}); // -1 will sort in desc. order (newest first)
    res.status(200).json(notes);
  } catch (error) {
    console.error("error in getAllNotes controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}
export async function getNoteById(req, res) {
  try {
    const notes = await Note.findById(req.params.id);
    if (!notes) return res.status(404).json({ message: "note not found" });
    res.status(200).json(notes);
  } catch (error) {
    console.error("error in getNoteById controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("error in createNote controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("error in updateNote controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const { title, content } = req.body;
    const noteToBeDeleted = await Note.findByIdAndDelete(req.params.id);
    if (!noteToBeDeleted)
      return res.status(404).json({ message: "note not found" });
    res.status(200).json(noteToBeDeleted);
  } catch (error) {
    console.error("error in deleteNote controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}
