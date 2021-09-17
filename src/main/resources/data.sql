USE
devsplash_db;
Delete
from user_skill
where 1 = 1;
DELETE
from skills
where 1 = 1;
DELETE
from projects
where 1 = 1;
delete
from users
where 1 = 1;

INSERT INTO devsplash_db.users (id, display_name, email, firstname, lastname, password, about_me, img_url, role)
VALUES (1, 'prachi007', 'prachi@devsplash.com', 'Prachi', 'Phatak',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'Full stack developer. Willing to collaborate. Learning react.',
            'https://avatars.githubusercontent.com/u/32047550?s=400&u=4c9a33ae3ecc3b8bff0636777decf36e9ae2e3ce&v=4',
        'USER'),
       (2, '@undertone', 'mitch@devsplash.com', 'Mitchell', 'Hogue',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'Full stack developer. Great team member. Open to suggestions.',
        'https://avatars.githubusercontent.com/u/82416712?v=4',
        'USER'),
       (3, '@thequantum', 'ricardo@devsplash.com', 'Ricardo', 'Figueroa',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'My Name''s Ricardo Figueroa and I''m a Full-Stack Web Developer in San Antonio, TX.',
        'https://avatars.githubusercontent.com/u/80980226?v=4',
        'USER'),
       (4, '@gogeek', 'diamond@devsplash.com', 'Diamond', 'Meredith-Anderson',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'Software developer with years of customer service experience and strong problem solving skills.',
        'https://avatars.githubusercontent.com/u/71880210?v=4',
        'USER'),
       (5, '@vegetasrevenge', 'casey@devsplash.com', 'Casey', 'Edwards',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'Proud Alumni of The Iron Yard - Dallas. Web Development Instructor with backend experience in the hospitality, energy, and engineering spaces. Bakes pie',
        'https://avatars.githubusercontent.com/u/28910286?v=4',
        'USER'),
       (6, '@suitcasecoder', 'laura@devsplash.com', 'Laura', 'Ruiz-Roehrs',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'Suitcase Coder | All things Learning to Code | Podcast & YouTube',
        'https://avatars.githubusercontent.com/u/41702570?v=4',
        'USER'),
       (7, '@teachersteacher', 'douglas@devsplash.com', 'Douglas', 'Hirish',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'My professional passion is solving business and technical problems for clients.I love creating new things!',
        'https://ca.slack-edge.com/T029BRGN0-UR3EVDZGA-8033e69d0412-512',
            'USER'),
       (8, '@innovator', 'jordy@devsplash.com', 'Jordy', 'Muniz',
        '$2a$10$azISrDJJLa9E7BLxcTANi.6lmyxqI5epHdFp8eLvk9z1TSsK58jde',
        'Excited to improve my coding skills everyday. It brings me pleasure when barriers that once seemed too big to tackle become too small to consider. ',
        'https://ca.slack-edge.com/T029BRGN0-U025WMNSKHV-2d280dc70386-512',
        'USER');


INSERT
INTO devsplash_db.projects (id, description, name, user_id)
VALUES (1, 'Match making for developers', 'Devsplash', 1),
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
VALUES (1, null, 'Java'),
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
VALUES (1, 1),
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

insert into devsplash_db.project_skill (skill_id, project_id)
values (1, 1),
       (1, 2),
       (2, 2),
       (2, 3),
       (3, 3),
       (4, 4),
       (5, 4),
       (5, 5),
       (6, 6),
       (7, 6),
       (8, 7),
       (9, 8),
       (9, 9),
       (10, 10),
       (10, 11),
       (11, 11),
       (12, 11);