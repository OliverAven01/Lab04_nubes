 CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100)
);

INSERT INTO productos (nombre) VALUES ('Producto A'), ('Producto B'), ('Producto C');
INSERT INTO clientes (nombre) VALUES ('Cliente X'), ('Cliente Y'), ('Cliente Z');

