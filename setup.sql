CREATE TABLE products1 (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  deposit REAL NOT NULL,
  available BOOL NOT NULL
);

CREATE TABLE products2 (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  deposit REAL NOT NULL,
  available BOOL NOT NULL
);

CREATE TABLE products3 (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  deposit REAL NOT NULL,
  available BOOL NOT NULL
);

CREATE TABLE products4 (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  deposit REAL NOT NULL,
  available BOOL NOT NULL
);



INSERT INTO products1 (name, price, deposit, available) VALUES
('Bier', 2.5, 2.0, 1),
('Radler', 2.5, 2.0, 1),
('Weiß Wein', 5.0, 2.0, 1),
('Rot Wein', 5.0, 2.0, 1);

INSERT INTO products2 (name, price, deposit, available) VALUES
('Havana', 6.0, 2.0, 1),
('Wodka', 6.0, 2.0, 1),
('Asbach', 6.0, 2.0, 1),
('Gin', 6.0, 2.0, 1);

INSERT INTO products3 (name, price, deposit, available) VALUES
('Wasser', 2.0, 1.0, 1),
('Cola', 2.5, 1.0, 1),
('Fanta', 2.5, 1.0, 1),
('Sprite', 2.5, 1.0, 1),
('Spezi', 2.5, 1.0, 1);

INSERT INTO products4 (name, price, deposit, available) VALUES
('Steak', 2.0, 0.0, 1),
('Bratwurst', 2.5, 0.0, 1);