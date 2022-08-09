------------------------------------------------ Borrar todo ------------------------------------------------

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



------------------------------------------------ Poblar todo ------------------------------------------------

-- categories --
INSERT INTO higge_db.categories (id, category) VALUES
(1, "Cine"), (2, "Música"), (3, "Naturaleza"), (4, "Arte"), (5, "Deportes");


-- roles --
INSERT INTO higge_db.roles (id, role) VALUES
(1, "Admin"), (2, "Cliente");

-- products --
INSERT INTO higge_db.products (id, name, description, price, discount, image, categoryId) VALUES 
(1, "Pulp Fiction", "Behind The Scenes", 12000, 10, "escenaPulpFiction.jpg", "2"),
(2, "Home Alone", "Kevin en problemas", 12000, 10, "macaulayCulkin.jpg", "2"),
(3, "Jack Nicholson", "Sonrie Jack!", 1200, 10, "jackNicholson.jpg", "2"),
(4, "Jules & Vincent", "Que dupla", 9000, 10, "jules&Vincent.jpg", "2"),
(5, "Jaws", "steven Spielberg y el Tiburón", 12000, 15, "stevenSpielberg.jpg", "2"),
(6, "Harry", "Mutt Cutts", 9000, 15, "harryDunne.jpg", "2");

-- users --
INSERT INTO higge_db.users (id, firstName, lastName, email, dateBirthday, address, interest, avatar, password, roleId) VALUES 
(1, "Admin", "Higge", "admin@higge.com.ar", "1991-01-01", 'asd 123', 'Cine', "admin.jpg", "$2a$12$0a.pwY7sEmoEOJfXmvR6du7frjT8CfzVvWMBSTXzEee6G2mM2TYta", 1),
(2, "Cliente", "Higge", "cliente@higge.com.ar", "1990-01-01", 'asd 123', 'Deportes', "cliente.jpg", "$2a$12$/iEIHkW756A025eKoD8PD.xyHVsohSoEgBiD61Q.sDxIc0bLyC56i", 2)

