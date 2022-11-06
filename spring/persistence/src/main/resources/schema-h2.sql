create table TODOLIST
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
    FK_TODOLIST  BIGINT       not null,
    FOREIGN KEY (FK_TODOLIST) REFERENCES TODOLIST(ID)
)
