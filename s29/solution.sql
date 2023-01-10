-- CREATE blog_db database
CREATE DATABASE blog_db;

--CREATE tables users, posts, post_comments, post_likes
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR (100) NOT NULL,
    password VARCHAR (300) NOT NULL,
    datetime_created DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE posts (
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR (500),
    content VARCHAR (5000),
    datetime_posted DATETIME,
    PRIMARY KEY (id),
    CONSTRAINT fk_posts_user_id
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

CREATE TABLE post_comments (
    id INT NOT NULL AUTO_INCREMENT,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    content VARCHAR (5000) NOT NULL,
    datetime_commented DATETIME,
    PRIMARY KEY (id),
    CONSTRAINT fk_post_comments_user_id
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,

    CONSTRAINT fk_post_comments_post_id
    FOREIGN KEY (post_id) REFERENCES posts (id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

CREATE TABLE post_likes (
    id INT NOT NULL AUTO_INCREMENT,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    datetime_liked DATETIME,
    PRIMARY KEY (id),
    CONSTRAINT fk_post_likes_user_id
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,

    CONSTRAINT fk_post_likes_post_id
    FOREIGN KEY (post_id) REFERENCES posts (id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

--Insert records in users table
INSERT INTO users(email, password, datetime_created) VALUES ("johnsmith@gmail.com", "passwordA", "2021-01-01 01:00:00");

INSERT INTO users(email, password, datetime_created) VALUES ("juandelacruz@gmail.com", "passwordB", "2021-01-01 02:00:00");

INSERT INTO users(email, password, datetime_created) VALUES ("janesmith@gmail.com", "passwordC", "2021-01-01 03:00:00");

INSERT INTO users(email, password, datetime_created) VALUES ("mariadelacruz@gmail.com", "passwordD", "2021-01-01 04:00:00");

INSERT INTO users(email, password, datetime_created) VALUES ("johndoe@gmail.com", "passwordE", "2021-01-01 05:00:00");

--Insert records in posts table
INSERT INTO posts(user_id, title, content, datetime_posted) VALUES ("1", "First Code", "Hello World!", "2021-01-02 01:00:00");

INSERT INTO posts(user_id, title, content, datetime_posted) VALUES ("1", "Second Code", "Hello Earth!", "2021-01-02 02:00:00");

INSERT INTO posts(user_id, title, content, datetime_posted) VALUES ("2", "Third Code", "Welcome to Mars!", "2021-01-02 03:00:00");

INSERT INTO posts(user_id, title, content, datetime_posted) VALUES ("4", "Fourth Code", "Bye bye solar system!", "2021-01-02 04:00:00");

--Get all the title with the user id of 1
SELECT title FROM posts WHERE user_id = 1;

--Get all the user's email and datetime of creation
SELECT email, datetime_created FROM users;

--Update the post with the user id of 1 and content of Hello Earth, content to "Hello People of the Earth!"
UPDATE posts SET content = "Hello People of the Earth!" WHERE user_id = "1" AND content = "Hello Earth!";

--Delete user with an email of johndoe@gmail.com
DELETE FROM users WHERE email = "johndoe@gmail.com";