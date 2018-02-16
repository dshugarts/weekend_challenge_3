--DBMS Set-Up Below

CREATE TABLE tasks (
	id SERIAL PRIMARY KEY,
	task_name varchar(255),
	due_date date,
	task_completed boolean
);

INSERT INTO tasks (task_name, due_date, task_completed)
VALUES ('Finish Base Mode', '02-17-2018', FALSE);

INSERT INTO tasks (task_name, due_date, task_completed)
VALUES ('Finish Hard Mode', '02-18-2018', FALSE);

INSERT INTO tasks (task_name, due_date, task_completed)
VALUES ('Finish Pro Mode', '02-19-2018', FALSE);