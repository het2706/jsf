var express = require("express");
var mysql = require("mysql2");

// Create Express app
var app = express();

// Set up MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bca_5th",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
  console.log("Connected to the database");
});

app.get("/student", (req, res) => {
  db.query("SELECT * FROM student", (err, results) => {
    if (err) {
      console.error("Error fetching data from the database:", err);
      return res.status(500).send("Error fetching data");
    }
    res.json(results);
  });
});
app.get("/student/:id", (req, res) => {
  const studentId = req.params.id;
  db.query(
    "SELECT * FROM student WHERE id = ?",
    [studentId],
    (err, results) => {
      if (err) {
        console.error("Error fetching data from the database:", err);
        return res.status(500).send("Error fetching data");
      }
      if (results.length === 0) {
        return res.status(404).send("Student not found");
      }
      res.json(results[0]);
    }
  );
});
// Start the Express server
app.listen(4000, function () {
  console.log("Server is running on http://localhost:4000");
});
