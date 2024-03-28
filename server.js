// // server.mjs

// import express from 'express';
// // import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';

// const app = express();

// app.use(express.json);
// app.use(express.urlencoded({extended:true}))
// app.use(cors());

// const PORT = process.env.PORT || 8000;

// // Connect to MongoDB (replace the connection string with your MongoDB URI)
// mongoose.connect('mongodb+srv://harpreetnarwal9:ghtthht9321@cluster0.f2hfypa.mongodb.net/assignment')
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Defining a schema
// const colorSchema = new mongoose.Schema({
//   color:{
//     type: String,
//     required:true,
//   }
// });

// // Create a model for the color data
// const Color = mongoose.model('Color', colorSchema);

// // Middleware
// // app.use(bodyParser.json());

// // Route to handle saving color data
// app.post("/", async (req, res) => {
//     try {
//     const { color } = req.body;

//     // Create a new color document
//     // const newColor = new Color({ color });
//     // const newColor={
//     //     Color:color
//     // }
//     const data ={
//         color:color
//     }
//     // Save the color document to the database
//     //await newColor.save();

//     await Color.insertMany([data]);

//     res.status(201).json({ message: 'Color saved successfully' });
//   } 
//   catch (error) {
//     console.error('Error saving color:', error);
//     res.status(500).json({ message: 'Failed to save color' });
//   }
// });


// // Start server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

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
    const { color } = req.body; // Access color directly from req.body

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
