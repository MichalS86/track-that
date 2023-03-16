\connect trackthat;

CREATE TABLE tracks.users (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
	created_at DATE
);

CREATE TABLE user_projects (
	user_id INT NOT NULL,
	project_id INT NOT NULL
);