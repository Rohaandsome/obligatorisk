CREATE TABLE billetter
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    film varchar(255) NOT NULL,
    seter INTEGER NOT NULL,
    fornavn varchar(255) NOT NULL,
    etternavn varchar(255) NOT NULL,
    mail varchar(255) NOT NULL,
    tlf INTEGER NOT NULL,
    PRIMARY KEY (id)
);