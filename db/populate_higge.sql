------------------------------------------------ erase everything ------------------------------------------------

-- products --
DELETE FROM higge_db.products;
ALTER TABLE higge_db.products AUTO_INCREMENT=1;

-- users --
DELETE FROM higge_db.users;
ALTER TABLE higge_db.users AUTO_INCREMENT=1;

-- categories --
DELETE FROM higge_db.categories;
ALTER TABLE higge_db.categories AUTO_INCREMENT=1;

-- roles --
DELETE FROM higge_db.roles;
ALTER TABLE higge_db.roles AUTO_INCREMENT=1;



------------------------------------------------ populate everything ------------------------------------------------

-- categories --
INSERT INTO higge_db.categories (id, category) VALUES
(1, "Cine"), (2, "Música"), (3, "Naturaleza"), (4, "Arte"), (5, "Deportes");


-- roles --
INSERT INTO higge_db.roles (id, role) VALUES
(1, "Admin"), (2, "Cliente");

-- products --
INSERT INTO higge_db.products (id, name, description, price, discount, image, categoryId) VALUES 
(1, "Bob Marley", "Cuadro de Bob Marley", 4500, 15, "bobMarley.jpg", "2"); 

-- users --
INSERT INTO higge_db.users (id, firstName, lastName, email, dateBirthday, address, interest, avatar, password, roleId) VALUES 
(1, "Admin", "Higge", "admin@higge.com.ar", "1991-01-01", 'asd 123', 'cine', "admin.jpg", "$2a$12$0a.pwY7sEmoEOJfXmvR6du7frjT8CfzVvWMBSTXzEee6G2mM2TYta", 1),
(2, "Cliente", "Higge", "cliente@higge.com.ar", "1990-01-01", 'asd 123', 'cine', "cliente.jpg", "$2a$12$/iEIHkW756A025eKoD8PD.xyHVsohSoEgBiD61Q.sDxIc0bLyC56i", 2)

