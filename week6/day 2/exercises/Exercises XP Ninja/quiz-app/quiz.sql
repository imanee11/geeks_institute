-- -- Database: quiz_game

-- -- DROP DATABASE IF EXISTS quiz_game;

-- CREATE DATABASE quiz_game
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    correct_answer TEXT NOT NULL
);

CREATE TABLE options (
    id SERIAL PRIMARY KEY,
    question_id INTEGER REFERENCES questions(id),
    option TEXT NOT NULL
);

INSERT INTO questions (question, correct_answer)
VALUES ('What is the capital of France?', 'Paris');

INSERT INTO options (question_id, option)
VALUES (1, 'Paris'), (1, 'London'), (1, 'Berlin'), (1, 'Madrid');


-- Question 2
INSERT INTO questions (question, correct_answer)
VALUES ('Which planet is known as the Red Planet?', 'Mars');

INSERT INTO options (question_id, option)
VALUES 
  (2, 'Earth'),
  (2, 'Venus'),
  (2, 'Mars'),
  (2, 'Jupiter');

-- Question 3
INSERT INTO questions (question, correct_answer)
VALUES ('What is the largest ocean on Earth?', 'Pacific Ocean');

INSERT INTO options (question_id, option)
VALUES 
  (3, 'Atlantic Ocean'),
  (3, 'Indian Ocean'),
  (3, 'Pacific Ocean'),
  (3, 'Arctic Ocean');

