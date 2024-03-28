insert into Bosch_User (EDV, User_Name, User_Password) values(
	"33223",
    "Joao ramirez",
    "aaaa"
);

insert into Bosch_User (EDV, User_Name, User_Password) values(
	"112233",
    "Maite Feld",
    "bbbb"
);

SELECT * FROM Bosch_User WHERE User_EDV = '33223' AND User_Password = 'aaaa';

select * from bosch_user;

drop table shed,bosch_user,epi,withdrawal,stock,machine;


create table Shed (
	ID int auto_increment primary key,
    Shed_Name varchar(50),
    Shed_Num varchar(5)
);


create table Bosch_User (
	ID int auto_increment primary key,
	EDV varchar(20) unique,
    User_Name varchar(100),
    User_Password varchar(100)
);

	
create table EPI (
	ID int auto_increment primary key,
    EPI_Name varchar(100),
    Days_time int
);


create table Withdrawal (
	ID int auto_increment primary key,
    EPI_ID int,
    User_ID int,
    Shed_ID int,
    Date_ Date,
    foreign key (Shed_ID) references Shed(ID),
    foreign key (EPI_ID) references EPI(ID),
    foreign key (User_ID) references Bosch_User(ID)
);


create table Stock (
	ID int auto_increment primary key,
    EPI_ID int,
    Quantity int,
    foreign key (EPI_ID) references EPI(ID)
);


create table Machine (
	ID int auto_increment primary key,
    Shed_ID int,
    Stock_ID int,
    foreign key (Shed_ID) references Shed(ID),
    foreign key (Stock_ID) references Stock(ID)
);
