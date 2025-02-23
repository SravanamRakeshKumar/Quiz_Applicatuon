const express = require("express");
const cors = require("cors");
const questions = require("./quesitions.json"); // Ensure JSON structure is correct

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

// ✅ Get all questions
app.get("/questions", (req, res) => {
  res.json(questions);
});

// ✅ Get all questions for a specific category
app.get("/questions/:category", (req, res) => {
  const category = req.params.category.toLowerCase(); // Convert to lowercase to avoid case issues

  if (questions[category]) {
    res.json(questions[category]); // Return all questions in that category
  } else {
    res.status(404).json({ message: "Category not found" });
  }
});

// ✅ Get a specific question by ID from a category
app.get("/questions/:category/:id", (req, res) => {
  const category = req.params.category.toLowerCase();
  const id = parseInt(req.params.id);

  if (questions[category]) {
    const question = questions[category].find((q) => q.id === id);

    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } else {
    res.status(404).json({ message: "Category not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
