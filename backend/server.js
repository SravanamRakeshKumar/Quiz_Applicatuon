const express = require("express");
const cors = require("cors");
const questions = require("./quesitions.json"); // Load JSON file
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

// Serve entire questions.json file
app.get("/quesitions", (req, res) => {
  res.json(questions);
});

// Serve questions based on category (like "aptitude", "reasoning", etc.)
// app.get("/questions/:category", (req, res) => {
//   const category = req.params.category;
//   if (questions[category]) {
//     res.json(questions[category]);
//   } else {
//     res.status(404).json({ error: "Category not found" });
//   }
// });

app.get("/questions/:category/:index", (req, res) => {
  const category = req.params.category;
  const index = parseInt(req.params.index); // Convert index to a number

  if (questions[category] && questions[category][index]) {
    res.json(questions[category][index]);
  } else {
    res.status(404).json({ error: "Question not found" });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
