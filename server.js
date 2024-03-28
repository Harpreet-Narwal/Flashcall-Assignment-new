import express from "express";
import { collection } from "./mongo.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
  // Handle GET request if needed
});

app.post("/", async (req, res) => {
  try {
    const { color } = req.body; 

    const data = {
      color: color
    };

    await collection.insertMany([data]);
    res.status(201).json({ message: 'Color saved successfully' });
    
  } catch (error) {
    console.error('Error saving color:', error);
    res.status(500).json({ message: 'Failed to save color' });
  }
});

app.listen(3000, () => {
  console.log("Server connected and listening on port 3000");
});
