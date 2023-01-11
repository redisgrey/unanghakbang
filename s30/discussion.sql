-- Add new records

-- Add 5 artists, 2 albums each, 2 songs per album
INSERT INTO artists(name) VALUES ("Taylor Swift");

INSERT INTO artists(name) VALUES ("Lady Gaga");

INSERT INTO artists(name) VALUES ("Justin Bieber");

INSERT INTO artists(name) VALUES ("Ariana Grande");

INSERT INTO artists(name) VALUES ("Bruno Mars");



--Taylor Swift
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Fearless", "2008", "3");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Fearless", "246", "Pop", "3");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Love Story", "246", "Country Pop", "3");

--Lady Gaga
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("A Star is Born", "2018-06-24", "4");

INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Born This Way", "2011-03-18", "4");


INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Shallow", "201", "Country Rock, Folk Rock", "4");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Born This Way", "252", "Electropop", "5");

-- Justin Bieber
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Purpose", "2015-04-10", "5");

INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Believe", "2012-12-20", "5");


INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Sorry", "232", "Dancehall-Poptropical", "7");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Boyfriend", "251", "Pop", "6");

--Ariana Grande
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Dangerous Woman", "2016-08-14", "6");

INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Thank You Next", "2019-11-20", "6");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Into You", "242", "EDM House", "8");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Thank U, Next", "236", "Pop, R&B", "9");

--Bruno Mars
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("24K Magic", "2016-04-24", "7");

INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Earth To Mars", "2011-10-17", "7");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("24K Magic", "236", "Funk, Disco, R&B", "10");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Lost", "232", "Pop", "11");

--* ADVANCED SELECTS
--Exclude Records
--SELECT * FROM table_name WHERE column_name != value;
SELECT * FROM songs WHERE id != 11;

--Select using comparison operators
--SELECT * FROM table_name WHERE column_name < value;
--SELECT * FROM table_name WHERE column_name <= value;
SELECT * FROM songs WHERE id < 11;
SELECT * FROM songs WHERE id <= 11;
SELECT * FROM songs WHERE id >= 11;
SELECT * FROM songs WHERE id > 11;


--Select using conditional operators
--SELECT column_name FROM table_name WHERE condition1 OR condition2
SELECT * FROM songs WHERE id = 1 OR id = 3 OR id = 5

SELECT * FROM songs WHERE id = 1 AND id = 3 AND id = 5

SELECT * FROM songs WHERE id IN (1,3,5)

SELECT * FROM songs WHERE genre IN ("Pop", "K-Pop")

--Find partial matches
SELECT * FROM songs WHERE song_name LIKE "%u";

SELECT * FROM songs WHERE song_name LIKE "%t";

SELECT * FROM songs WHERE song_name LIKE "t%";

SELECT * FROM songs WHERE song_name LIKE "thank%";

SELECT * FROM songs WHERE song_name LIKE "%a%";

SELECT * FROM albums WHERE date_released LIKE "%201%";

SELECT * FROM albums WHERE date_released LIKE "%19%";

--Sorting Records
--SELECT column_name FROM table_name ORDER BY column_name ASC | DESC
SELECT * FROM songs ORDER BY song_name ASC

SELECT * FROM songs ORDER BY song_name DESC

--Distinct Records
SELECT DISTINCT genre FROM songs;

--Table Joins

--Combine artists and albums table
SELECT * FROM artists 
JOIN albums ON 
artists.id = albums.artist_id;

SELECT * FROM artists 
JOIN albums ON
artists.id = albums.artist_id
JOIN songs ON 
albums.id = songs.album_id;

--Select columns to be included per table
SELECT artists.name, albums.album_title

FROM artists

JOIN albums

ON artists.id = albums.artist_id

--
SELECT * FROM artists

	LEFT JOIN albums ON
    
    artists.id = albums.artist_id