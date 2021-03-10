const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/hello", (req, res) => res.send("Hello world!"));

app.use("/home", express.static(path.join(__dirname, "../client")));

app.use((req, res) => {
  res.status(404).json({ ERROR: "Page not found." });
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ ERROR: "Page not found." });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
