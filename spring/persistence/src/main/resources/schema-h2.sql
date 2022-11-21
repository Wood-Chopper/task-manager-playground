create table TASKLIST
(
    ID           BIGINT       not null primary key auto_increment,
    NAME         VARCHAR(500) not null,
    CREATIONDATE TIMESTAMP    not null
);

create table ITEM
(
    ID           BIGINT       not null primary key auto_increment,
    NAME         VARCHAR(500) not null,
    CREATIONDATE TIMESTAMP    not null,
    MYORDER        BIGINT null,
    CHECKED      BOOLEAN default false,
    FK_TASKLIST  BIGINT       not null,
    FOREIGN KEY (FK_TASKLIST) REFERENCES TASKLIST(ID)
)
