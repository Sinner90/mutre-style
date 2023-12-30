CREATE TABLE products1 (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  size REAL NOT NULL,
  available BOOL NOT NULL
);

CREATE TABLE products2 (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  size REAL NOT NULL,
  available BOOL NOT NULL
);

CREATE TABLE products3 (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  size REAL NOT NULL,
  available BOOL NOT NULL
);

CREATE TABLE products4 (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  size REAL NOT NULL,
  available BOOL NOT NULL
);



INSERT INTO products1 (name, price, size, available) VALUES
('Pils / Radler', 2.5, 0.33, 1),
('Weizen', 3.0, 0.50, 1),
('Desperados', 4.0, 0.33, 1),
('Silvaner / Rotling', 3.0, 0.25, 1),
('Weinschorle', 2.0, 0.25, 1),
('Red Bull', 3.5, 0.25, 1),
('Wasser spritzig', 2.0, 0.5, 1),
('Cola / Fanta / Mezzo', 2.5, 0.33, 1);

INSERT INTO products2 (name, price, size, available) VALUES
('Mojito', 7.0, 0.4, 1),
('Tochdown', 7.0, 0.4, 1),
('Cuba Libre / Perfect', 6.0, 0.4, 1),
('Aperol Spritz', 6.0, 0.4, 1),
('Lille Wild Berry', 6.0, 0.4, 1),
('Notlösung', 5.0, 0.4, 1),
('Oppmann Schwarzlack', 2.5, 0.25, 1),
('Oppmann Classico', 2.5, 0.25, 1),
('Sekt Orange', 2.5, 0.25, 1);

INSERT INTO products3 (name, price, size, available) VALUES
('Asbach Cola', 3.0, 0.20, 1),
('Havana Cola', 3.0, 0.20, 1),
('Jägermeister Cola', 3.0, 0.20, 1),
('Capitan Morgan', 3.0, 0.20, 1),
('Vodka O / Lemon / Cola', 3.0, 0.20, 1),
('Jacky Cola', 3.5, 0.20, 1),
('Mischung Bull', 3.5, 0.20, 1),
('Asbach Cola', 6.0, 0.40, 1),
('Havana Cola', 6.0, 0.40, 1),
('Jägermeister Cola', 6.0, 0.40, 1),
('Capitan Morgan', 6.0, 0.40, 1),
('Vodka O / Lemon / Cola', 6.0, 0.40, 1),
('Jacky Cola', 7.0, 0.40, 1),
('Mischung Bull', 7.0, 0.40, 1);

INSERT INTO products4 (name, price, size, available) VALUES
('Steak', 2.5, 0.0, 1),
('Bratwurst', 2.0, 0.0, 1);