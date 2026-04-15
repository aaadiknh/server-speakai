import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import evaluateSpeaking from "./evaluateSpeaking.js";
import practiceFeedback from "./practiceFeedback.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
// route AI speaking evaluation
app.use("/api", evaluateSpeaking);
app.use("/api", practiceFeedback);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});