-- Tabla category
DELETE FROM category;
ALTER SEQUENCE category_id_seq RESTART WITH 1;
INSERT INTO category (description, created_date)
VALUES
('Drama', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Accion', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Comedia', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Crimen', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Fantasia', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Novelas', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Ciencia Ficción', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Misterio', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Suspenso', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Terror', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Policial', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Historia', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Poesia', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Otro', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota');


-- Tabla publisher
DELETE FROM publisher;
ALTER SEQUENCE publisher_id_seq RESTART WITH 1;
INSERT INTO publisher (name_publisher, created_date)
VALUES
('diana', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('editorial planeta', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('seix barral', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('ediciones destino', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('espasa', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota');


-- Tabla publisher
DELETE FROM format;
ALTER SEQUENCE format_id_seq RESTART WITH 1;
INSERT INTO format (description, created_date)
VALUES
('digital', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('fisico', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota');


-- Tabla publisher
DELETE FROM author;
ALTER SEQUENCE author_id_seq RESTART WITH 1;
INSERT INTO author (name, created_date)
VALUES
('james clear', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('sonsoles Ónega', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('alfonso goizueta', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('rebecca yarros', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('eduardo mendoza', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('césar pérez gellida', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('camilla läckberg', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('marian rojas estapé', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('ángel martín', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('máximo huerta', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota');


-- Tabla publisher
DELETE FROM "user";
ALTER SEQUENCE user_id_seq RESTART WITH 1;
INSERT INTO "user" (user_name, email_address, user_password, street_address, score, created_date)
VALUES
('denney stairmand', 'dstairmand0@fema.gov', 'yG0\H"Ko', '88618 Blackbird Hill', 4.0, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('merola tobin', 'mtobin1@1688.com', 'zH0.t=JCP~lZo', '9104 Sugar Lane', NULL, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('almeria rockhall', 'arockhall2@reuters.com', 'eC1.O`q9', '5 Quincy Avenue', 2.9, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('emmery townshend', 'etownshend3@mtv.com', 'uJ7&sCooe+', '2 Rusk Place', 4.7, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('wittie dewsnap', 'wdewsnap4@bbc.co.uk', 'jQ7}$vtY\ldW/''s', '2778 Oneill Park', 4.0, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('portie mackness', 'pmackness5@imageshack.us', 'oT8=6C1K{7f5', '51504 Homewood Hill', NULL, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('riannon dobrowolny', 'rdobrowolny6@simplemachines.org', 'cM3.8!e3s/rg0cy', '5 Packers Alley', NULL, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('jessica mackean', 'jmackean7@twitpic.com', 'fK9<n!"'',+', '5121 Ilene Alley', NULL, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('donny chaffey', 'dchaffey8@deviantart.com', 'dQ2<N?tD(X/q./m', '7 Brentwood Hill', 3.0, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('brewster thurber', 'bthurber9@wiley.com', 'kP1#fcq3/d', '991 Muir Park', 2.1, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('allyn gianelli', 'agianellia@kickstarter.com', 'rV9}I|X)`wlG', '8 Steensland Court', NULL, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('emmey cahan', 'ecahanb@51.la', 'bO9+O&!i', '137 American Ash Hill', 5.0, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('bev ellse', 'bellsec@1688.com', 'cN3.MI4k,Sa#K,', '44 Corscot Park', NULL, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('tony hutten', 'thuttend@gmpg.org', 'oV3@y#av', '3 Tony Trail', 3.0, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('huey konke', 'hkonkee@disqus.com', 'bQ0>|wey6', '0284 Evergreen Drive', 4.2, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('rolph cool', 'rcoolf@comcast.net', 'iB8_Te/f.~+*PeA=', '08 Mitchell Court', 2.3, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('forbes ewert', 'fewertg@msu.edu', 'uC2|T}q.`n19TC', '8141 Helena Point', NULL, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('stacee clipsham', 'sclipshamh@craigslist.org', 'pC9!SW,c!X`', '3072 Welch Point', NULL, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('ania skade', 'askadei@blogger.com', 'wU1=v{Qid0', '3 Pawling Alley', NULL, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('godfrey norcutt', 'gnorcuttj@mapquest.com', 'jS5*S0.9wx}z', '5 5th Terrace', 3.1, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('ginneidy', 'ginneidy@gmail.com', 'abc123', NULL, NULL, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota');


-- Tabla publisher
DELETE FROM book;
ALTER SEQUENCE book_id_seq RESTART WITH 1;
INSERT INTO book (title, price, description, pub_year, pages, front_page, format_id, author_id, publisher_id, seller_id, created_date)
VALUES
('Habitos Atomicos', 25000, 'A menudo pensamos que para cambiar de vida tenemos que pensar en hacer cambios grandes. Nada más lejos de la realidad. Según el reconocido experto en hábitos James Clear, el cambio real proviene del resultado de cientos de pequeñas decisiones: hacer dos flexiones al día, levantarse cinco minutos antes o hacer una corta llamada telefónica.', 2020, 336, NULL, 1, 1, 1, 8, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Las hijas de la criada', 17000, 'La novela ganadora del Premio Planeta 2023 nos sumerge, con la cadencia de las historias narradas junto al fuego, en un apasionante relato en un remoto pazo de Galicia. Hay secretos de familia que merecen ser contados. Esta es la historia de uno de ellos.', 2023, 480, NULL, 1, 2, 2, 7, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('La sangre del padre', 32000, 'La sangre del padre, Finalista del Premio Planeta 2023, es una novela épica y colosal sobre el hombre que quiso salvar a los pueblos de la tiranía en aras de la libertad. Conquistó el imperio más poderoso del mundo, pero la guerra más violenta la libró contra sí mismo.', 2023, 608, NULL, 2, 3, 2, 15, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Alas de sangre (Empíreo 1)', 24000, 'Vuela... o muere. El nuevo fenómeno de fantasía juvenil del que todo el mundo habla. «¡La novela de fantasía más brutalmente adictiva que he leído en una década!» Tracy Wolff, autora de la Serie Crave', 2023, 736, NULL, 1, 4, 2, 12, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Tres enigmas para la Organización', 32000, 'Barcelona, primavera de 2022. Los miembros de una organización gubernamental secreta se enfrentan a la peligrosísima investigación de tres casos que tal vez estén relacionados entre sí, o tal vez no: la aparición de un cuerpo sin vida en un hotel de Las Ramblas, la desaparición de un millonario británico en su yate y las singulares finanzas de Conservas Fernández.', 2024, 408, NULL, 2, 5, 3, 5, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Bajo tierra seca', 16000, 'Extremadura, principios del siglo xx. Antonia Monterroso, más conocida como la Viuda, es la propietaria de una de las mayores haciendas de la región; intenta mantenerla a flote en un momento en el que la hambruna que afecta las zonas rurales no parece terminar jamás. Pero un incendio destruye todo lo que con tanto empeño ha logrado construir y, tras él, ella desaparece sin dejar rastro.', 2024, 504, NULL, 1, 6, 4, 13, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('El espejismo', 36000, 'Se acerca la Navidad en Estocolmo y la ciudad se llena de luces. Pero algo siniestro está a punto de suceder: al mismo tiempo que un miembro del ministerio sueco está siendo amenazado de una forma macabra, una pila de huesos de aspecto misterioso es hallada en las vías de metro abandonado de la ciudad, y todo apunta a que pertenecen a un importante financiero.', 2024, 720, NULL, 1, 7, 2, 15, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Recupera tu mente, reconquista tu vida', 35000, 'Cada vez somos más impacientes y estamos más irritables. ¿Notas que te cuesta más prestar atención? ¿Has sentido ansiedad últimamente? ¿Toleras peor el aburrimiento y el dolor?', 2024, 384, NULL, 2, 8, 5, 20, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Detrás del ruido', 19000, 'Tras el fenómeno editorial de Por si las voces vuelven, Ángel Martín regresa a las librerías con un libro íntimo e impactante —pero no exento de humor— sobre todo aquello que le ayudó a rehacerse y mantener la cordura, tras superar su brote psicótico.', 2023, 256, NULL, 1, 9, 2, 6, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('París despertaba tarde', 29000, 'Alice Humbert tiene el alma desgarrada. Erno Hessel, el amor de su vida, la ha dejado para irse a Nueva York. Estamos en París, 1924, la ciudad se prepara para albergar los Juegos Olímpicos, fundados bajo el símbolo de la unión y la hermandad. Todo bulle: la culminación de la basílica del Sagrado Corazón, los movimientos artísticos, el anarquismo, su desconsuelo…', 2024, 472, NULL, 2, 10, 2, 19, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota');


-- Tabla publisher
DELETE FROM role;
ALTER SEQUENCE role_id_seq RESTART WITH 1;
INSERT INTO role (description, created_date)
VALUES
('cliente', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('administrador', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota');


-- Tabla publisher
INSERT INTO user_role (user_id, role_id)
VALUES
(1, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 2);


-- Tabla publisher
DELETE FROM favorite_list;
ALTER SEQUENCE favorite_list_id_seq RESTART WITH 1;
INSERT INTO favorite_list (user_id, created_date)
VALUES
(17, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(6, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(19, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(16, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(1, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(9, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(3, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(2, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(4, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(5, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota');


-- Tabla publisher
INSERT INTO favorite_books (favorite_list_id, book_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 6);


-- Tabla publisher
DELETE FROM "comment";
ALTER SEQUENCE comment_id_seq RESTART WITH 1;
INSERT INTO comment (observation, user_id, created_date)
VALUES
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 14, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 18, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 8, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 18, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 14, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 8, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 12, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 17, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 7, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 8, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 18, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 11, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 9, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 2, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a molestie mi. Vestibulum vel fringilla arcu, quis faucibus urna.', 20, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota');


-- Tabla publisher
DELETE FROM sale;
ALTER SEQUENCE sale_id_seq RESTART WITH 1;
INSERT INTO sale (total_amount, date_sale, seller_id, book_id, created_date)
VALUES
(36000, '2024-02-26 7:00:00', 15, 7, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(32000, '2023-10-17 8:00:00', 5, 5, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(35000, '2023-10-16 9:00:00', 18, 8, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(17000, '2024-04-28 10:00:00', 10, 2, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(25000, '2024-04-03 11:00:00', 5, 1, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota');


-- Tabla publisher
INSERT INTO book_category (book_id, category_id)
VALUES
(1, 4),
(2, 8),
(3, 4),
(4, 3),
(5, 6),
(6, 3),
(7, 8),
(8, 14),
(9, 12),
(10, 15);


-- Tabla publisher
DELETE FROM purchase;
ALTER SEQUENCE purchase_id_seq RESTART WITH 1;
INSERT INTO purchase (total_amount, user_id, date_purchase, created_date)
VALUES
(25000, 7, '2024-02-26 7:00:00', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(17000, 7, '2023-10-17 8:00:00', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(3200, 20, '2023-10-16 9:00:00', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(24000, 13, '2024-04-28 10:00:00', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(32000, 4, '2024-04-03 11:00:00', CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota');


-- Tabla publisher
INSERT INTO book_purchase (book_id, purchase_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);


-- Tabla publisher
DELETE FROM cart;
ALTER SEQUENCE cart_id_seq RESTART WITH 1;
INSERT INTO cart (total_amount, user_id, created_date)
VALUES
(53000, 9, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(49000, 19, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(41000, 5, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(32000, 8, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota'),
(32000, 19, CURRENT_TIMESTAMP AT TIME ZONE 'America/Bogota');


-- Tabla publisher
INSERT INTO cart_book (cart_id, book_id)
VALUES
(1, 10),
(2, 2),
(3, 1),
(4, 5),
(5, 3),
(1, 4),
(2, 3),
(3, 6);


