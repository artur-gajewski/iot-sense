DROP DATABASE IF EXISTS iot_sense;
CREATE DATABASE iot_sense;

\c iot_sense;

CREATE TABLE sensors (
  ID SERIAL PRIMARY KEY,
  description VARCHAR,
  last_activity TIMESTAMP
);

INSERT INTO sensors (description, last_activity)
  VALUES ('Test Sensor #1', NOW());
