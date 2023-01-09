-- CREATE DATABASE
CREATE DATABASE enrollment_db;

-- CREATE THE FOLLOWING TABLES: STUDENTS, TEACHERS, COURSES 
CREATE TABLE students (
	id INT NOT NULL AUTO_INCREMENT,
    student_name VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE courses (
	id INT NOT NULL AUTO_INCREMENT,
    course_name VARCHAR (50) NOT NULL,
    student_id INT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_student_course_id
    	FOREIGN KEY (student_id) REFERENCES students (id)
    	ON UPDATE CASCADE
    	ON DELETE RESTRICT
);

CREATE TABLE teachers (
	id INT NOT NULL AUTO_INCREMENT,
    teacher_name VARCHAR (50) NOT NULL,
    course_id INT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_teacher_course_id
    	FOREIGN KEY (course_id) REFERENCES courses (id)
    	ON UPDATE CASCADE
    	ON DELETE RESTRICT
);