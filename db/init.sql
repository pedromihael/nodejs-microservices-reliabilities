CREATE DATABASE ms_reliabilities;

CREATE USER ms_dev with password 'docker';

GRANT ALL PRIVILEGES ON DATABASE ms_reliabilities TO ms_dev;
