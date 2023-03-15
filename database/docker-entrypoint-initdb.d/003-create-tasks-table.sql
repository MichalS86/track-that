\connect trackthat;

CREATE TABLE tracks.tasks (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
	description VARCHAR,
	creator_id INT NOT NULL,
	created_at DATE
);

CREATE TABLE user_tasks (
	user_id INT NOT NULL,
	task_id INT NOT NULL
);