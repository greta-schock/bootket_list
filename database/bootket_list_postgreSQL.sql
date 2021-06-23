CREATE DATABASE bootket_list; 

\c bootket_list;

-- CREATE TABLES
CREATE TABLE hikes (
    id SERIAL NOT NULL PRIMARY KEY,
    "id": VARCHAR (50),
    "parkName" VARCHAR (250),
    "url" VARCHAR (250),
    "title" VARCHAR (250),
    "shortDescription" VARCHAR (1000),
    "accessibilityInformation" VARCHAR (1000),
    "arePetsPermitted" VARCHAR (250),
    "duration" VARCHAR (250),
    "durationDescription" VARCHAR (1000), 
);

CREATE INDEX id ON hikes (id);