USE devsplash_db;
Delete
from user_skill where 1=1;
DELETE
from skills where 1=1;
DELETE
from projects where 1=1;
delete
from users where 1=1;

INSERT INTO devsplash_db.users (id, display_name, email, firstname, lastname, password, role)
VALUES (1, 'prachi007', 'prachi@devsplash.com', 'Prachi', 'Phatak',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'USER'),
       (2, '@undertone', 'mitch@devsplash.com', 'Mitchell', 'Hogue',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'USER'),
       (3, '@thequantum', 'ricardo@devsplash.com', 'Ricardo', 'Figueroa',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'USER'),
       (4, '@gogeek', 'diamond@devsplash.com', 'Diamond', 'Meredith-Anderson',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'USER'),
       (5, '@vegetasrevenge', 'casey@devsplash.com', 'Casey', 'Edwards',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'USER'),
       (6, '@suitcasecoder', 'laura@devsplash.com', 'Laura', 'Ruiz-Roehrs',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'USER'),
       (7, '@teachersteacher', 'douglas@devsplash.com', 'Douglas', 'Hirish',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'USER'),
       (8, '@innovator', 'jordy@devsplash.com', 'Jordy', 'Muniz',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'USER');


INSERT
INTO devsplash_db.projects (id, description, name, user_id)
VALUES
(1, 'Match making for developers', 'Devsplash', 1),
(2, 'Web design project - create a responsive webpage', 'Design Project', 2),
(3, 'Web application to facilitate writing blogs', 'Expressed!', 3),
(4, 'Place to add all your favourite movies', 'Screens come true', 4),
(5, 'Help barista with easy UI to maintain list of coffees', 'The Busy Beans', 5),
(6, 'Weather app with map twist', 'Earthlight', 6),
(7, 'Game spot for all JS games', 'Gamepoint', 7),
(8, 'Pizza website for ordering pizza. ', 'Pizza shop', 2),
(9, 'Learn design by creating twitter', 'Twitter78', 5),
(10, 'Maintain book reviews', 'Bookmarked', 2),
(11, 'Implement datastructures - binary tree etc', 'Datastructures', 8),
(12, 'Learn design patterns using small application', 'Design Patterns', 1);

INSERT INTO devsplash_db.skills (id, description, name)
VALUES
(1, null, 'Java'),
(2, null, 'JS'),
(3, null, 'HTML'),
(4, null, 'Springboot'),
(5, null, 'Hibernate'),
(6, null, 'C#'),
(7, null, 'Bootstrap'),
(8, null, 'Thymeleaf'),
(9, null, 'CSS'),
(10, null, 'RESTful'),
(11, null, 'Agile'),
(12, null, 'React'),
(13, null, 'MangoDB'),
(14, null, 'MySQL'),
(15, null, 'JQuery');


INSERT INTO devsplash_db.user_skill (user_id, skill_id)
VALUES
(1, 1),
(1, 4),
(1, 5),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 7),
(3, 3),
(4, 1),
(4, 2),
(4, 3),
(5, 1),
(5, 4),
(5, 5),
(6, 2),
(6, 3),
(6, 12),
(7, 1),
(7, 14),
(7, 6),
(8, 10),
(8, 13),
(8, 15);