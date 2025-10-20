import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
connectDB();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("server started on port :" , PORT);
});

// mongodb+srv://khushisu29_db_user:8jsVssEHxm6L7pOs@cluster0.mlzaihl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
