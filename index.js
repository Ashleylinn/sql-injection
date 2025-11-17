const express = require('express');
const app = express();
const client = require('./db');

app.use(express.json());

// indecure login endpoint
app.post('/login-insecure', async (req, res) => {
  const { username, password } = req.body;

  // vulnerable query (no parametrization)
  const query = `
    SELECT * FROM users 
    WHERE username = '${username}' 
    AND password = '${password}';
  `; 

  console.log("Executing query:", query);

  try {
    const result = await client.query(query);

    if (result.rows.length > 0) {
      return res.json({ message: "Logged in (INSECURE)", user: result.rows[0] });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// secure login endpoint
app.post('/login-secure', async (req, res) => {
  const { username, password } = req.body;

  const query = `
    SELECT * FROM users 
    WHERE username = $1 
    AND password = $2;
  `;

  try {
    const result = await client.query(query, [username, password]);

    if (result.rows.length > 0) {
      return res.json({ message: "Logged in (SECURE)", user: result.rows[0] });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(3000, () => console.log("Running on http://localhost:3000"));
