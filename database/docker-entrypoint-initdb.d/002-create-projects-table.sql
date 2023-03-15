\connect trackthat;

CREATE TABLE tracks.projects (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
	created_at DATE
);
