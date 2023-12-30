const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const port = process.env.PORT || 3000;

// Öffne die SQLite-Datenbank
const db = new sqlite3.Database('products.db');

// Middleware für das Parsen von JSON-Daten
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Statische Dateien (CSS, JS)
app.use(express.static('public'));

// Routen-Handler
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API zum Abrufen von Produktpreise aus products1
app.get('/getPrices/products1', (req, res) => {
  db.all('SELECT * FROM products1', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

// API zum Abrufen von Produktpreise aus products2
app.get('/getPrices/products2', (req, res) => {
  db.all('SELECT * FROM products2', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

// API zum Abrufen von Produktpreise aus products3
app.get('/getPrices/products3', (req, res) => {
  db.all('SELECT * FROM products3', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

// API zum Abrufen von Produktpreise aus products4
app.get('/getPrices/products4', (req, res) => {
  db.all('SELECT * FROM products4', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

// API zum Aktualisieren von Getränkepreisen
app.post('/updatePrice', (req, res) => {
  const { id, price } = req.body;

  db.run('UPDATE products SET price = ? WHERE id = ?', [price, id], (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true });
    }
  });
});

// API zum Aktualisieren von Preisen und Pfand für Produkte in einer bestimmten Tabelle
app.post('/updateProduct', (req, res) => {
  const { table, id, price, deposit } = req.body;

  if (!table || !id || (price === undefined && deposit === undefined)) {
    return res.status(400).json({ error: 'Invalid request. Please provide table, id, and either price or deposit.' });
  }

  let updateQuery = 'UPDATE products' + table + ' SET ';
  let updateValues = [];
  let updates = [];

  if (price !== undefined) {
    updates.push('price = ?');
    updateValues.push(price);
  }

  if (deposit !== undefined) {
    updates.push('deposit = ?');
    updateValues.push(deposit);
  }

  updateQuery += updates.join(', ') + ' WHERE id = ?';
  updateValues.push(id);

  db.run(updateQuery, updateValues, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true });
    }
  });
});

// Starte den Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Schließe die Datenbankverbindung beim Beenden der Anwendung
process.on('SIGINT', () => {
  db.close((err) => {
    console.log('Database connection closed.');
    process.exit(err ? 1 : 0);
  });
});
