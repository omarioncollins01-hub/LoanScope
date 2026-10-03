import express from "express";
import cors from "cors";
import calculateRoute from "./routes/calculate.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/calculate", calculateRoute);

app.listen(3000, "0.0.0.0", () => {
  console.log("Backend running on port 3000");
});

