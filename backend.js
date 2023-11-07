const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const sandboxDB = [];

app.post("/items", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }

  const newItem = {
    id: sandboxDB.length + 1,
    name
  };

  sandboxDB.push(newItem);
  res.status(201).json(newItem);
});

app.get("/items", (req, res) => {
  res.json(sandboxDB);
});

app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const item = sandboxDB.find((item) => item.id === id);

  if (!item) {
    return res.status(404).json({ error: "Item not found." });
  }

  res.json(item);
});

app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const itemIndex = sandboxDB.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found." });
  }

  sandboxDB[itemIndex].name = name;
  res.json(sandboxDB[itemIndex]);
});

app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const itemIndex = sandboxDB.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found." });
  }

  const deletedItem = sandboxDB.splice(itemIndex, 1)[0];
  res.json(deletedItem);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
