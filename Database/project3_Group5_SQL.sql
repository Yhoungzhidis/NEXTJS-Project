
CREATE TABLE Student(student_id varchar(50) PRIMARY KEY,
					 F_name text,
					 L_name text,
					 Other_names text,
					 Programme text,
					 Contact integer,
					 Email varchar(70),
					 Student_password varchar(100)
					);

CREATE TABLE All_courses_tb(
	Programme text,
	course_code varchar(10),
	course_title text);
					
CREATE TABLE Registered_courses(student_id varchar(50),
					 course_code varchar(10) PRIMARY KEY,
					 course_title text,
					 Programme text,
					 FOREIGN KEY(student_id) REFERENCES Student(student_id)
					);


INSERT INTO Student(student_id, F_name, L_name, Other_names, Programme, Contact, Email, Student_password)
	VALUES('DSA11234', 'David', 'Sam', 'Ato', 'Computer Engineering', 0243567890, 'dsato@gmail.com', 'jjjjj'),
	('ASA23451', 'Ann', 'Simmons', 'Akos', 'Biomedical Engineering', 0554321123, 'aasimmons@gmail.com', 'fffff'),
	('KNB11110', 'Kwesi', 'Nsiah', 'Brobbey', 'Food Process Engineering', 0244356789, 'kbnsiah@gmail.com', 'kkkkk'),
	('MCC27654', 'Miles', 'Coffie', 'Charles', 'Material Science Engineering', 0554678921,'mccoffie@gmail.com', 'aswdf'),
	('KNT22078', 'Kevin', 'Newton', 'Tyrone', 'Agricultural Engineering', 0554678921,'mccoffie@gmail.com', 'wqwqwe');

list of all courses
INSERT INTO All_courses_tb(Programme, course_code, course_title)
	VALUES('Computer Engineering', 'CPEN213', 'DISCRETE MATHEMATICS'),
	('Computer Engineering', 'CPEN211', 'DATABASE SYSTEM DESIGN'),
	('Computer Engineering', 'CPEN201', 'C++ PROGRAMMING'),
	('Biomedical Engineering', 'SENG203', 'THERMODYNAMICS I'),
	('Biomedical Engineering', 'BMEN201', 'GENERAL BIOLOGY'),
	('Biomedical Engineering', 'SENG205', 'STRENGTH OF MATERIALS'),
	('Food Process Engineering', 'SENG203', 'THERMODYNAMICS I'),
	('Food Process Engineering', 'SENG205', 'STRENGTH OF MATERIALS'),
	('Food Process Engineering', 'FPEN201', 'FOOD SYSTEMS'),
	('Agricultural Engineering', 'SENG203', 'THERMODYNAMICS I'),
	('Agricultural Engineering', 'SENG205', 'STRENGTH OF MATERIALS'),
	('Agricultural Engineering', 'AREN203', 'AGRICULTURAL SYSTEMS'),
	('Material Science Engineering', 'SENG205', 'STRENGTH OF MATERIALS'),
	('Material Science Engineering', 'SENG203', 'THERMODYNAMICS I'),
	('Material Science Engineering', 'MTEN205', 'FUNDAMENTALS OF MATERIALS');



-- register courses 
CREATE OR REPLACE FUNCTION populate_courses(student_id varchar(50), course_code varchar(10), course_title text) RETURNS void 
LANGUAGE 'plpgsql'
AS
$BODY$
BEGIN
	INSERT INTO Registered_courses(student_id, course_code, course_title)
		--Course ID and title selected 
		VALUES(student_id, course_code, course_title);
END;
$BODY$


-- show registered courses and login authentication
CREATE OR REPLACE FUNCTION student_account(student_id varchar(50)) RETURNS void 
LANGUAGE 'plpgsql'
AS
$BODY$
BEGIN
	SELECT * FROM Student LEFT JOIN Courses ON Student.student_id = Registered_courses.student_id
	--id input from app user
	WHERE student_id = '';
END;
$BODY$



					  