
SELECT * FROM Bosch_User WHERE User_EDV = '33223' AND User_Password = 'aaaa';

select * from bosch_user;

drop table shed,bosch_user,epi,withdrawal,stock,machine;

SELECT Machine.ID, Machine.Shed_ID
FROM Machine
INNER JOIN Stock ON Machine.ID = Stock.Machine_ID
WHERE Stock.EPI_ID = 1;

-- Inserindo dados na tabela Shed
INSERT INTO Shed (Shed_Name, Shed_Num) VALUES
('Galpão A', '001'),
('Galpão B', '002'),
('Galpão C', '003');

-- Inserindo dados na tabela Bosch_User
INSERT INTO Bosch_User (EDV, User_Name, User_Password, IsAdm) VALUES
('EDV001', 'João Silva', 'senha123', true),
('EDV002', 'Maria Santos', 'abc456', false),
('EDV003', 'Carlos Oliveira', 'xyz789', false);

-- Inserindo dados na tabela EPI
INSERT INTO EPI (EPI_Name, Days_time) VALUES
('Capacete de segurança', 30),
('Luvas de proteção', 60),
('Óculos de segurança', 90);

-- Inserindo dados na tabela Withdrawal
INSERT INTO Withdrawal (EPI_ID, User_ID, Shed_ID, Date_) VALUES
(1, 1, 1, '2024-03-10'),
(2, 2, 2, '2024-03-11'),
(3, 3, 3, '2024-03-12');

-- Inserindo dados na tabela Machine
INSERT INTO Machine (Shed_ID, Machine_code) VALUES
(1, 'Máquina 001'),
(2, 'Máquina 002'),
(3, 'Máquina 003');

INSERT INTO Stock (Machine_ID, EPI_ID, Quantity) VALUES
(1,1,20),
(1,2,20),
(1,3,20),
(2,1,20),
(2,2,20),
(2,3,20),
(3,3,20);


create table Shed (
	ID int auto_increment primary key,
    Shed_Name varchar(50),
    Shed_Num varchar(5)
);


create table Bosch_User (
	ID int auto_increment primary key,
	EDV varchar(20) unique,
    User_Name varchar(100),
    User_Password varchar(100),
    IsAdm boolean
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

create table Machine (
	ID int auto_increment primary key,
    Shed_ID int,
    Machine_code varchar(30),
    foreign key (Shed_ID) references Shed(ID)
);

create table Stock (
	ID int auto_increment primary key,
    Machine_ID int,
    EPI_ID int,
    Quantity int,
    foreign key (EPI_ID) references EPI(ID),
    foreign key (Machine_ID) references Machine(ID)
);


select * from epi;
delete from epi where ID = 12;

SELECT Machine.Shed_ID, Shed.Shed_Name
FROM Machine
INNER JOIN Stock ON Machine.ID = Stock.Machine_ID
INNER JOIN Shed on Machine.Shed_ID = Shed.ID
WHERE Stock.EPI_ID = 3;

drop table Shed, bosch_user,epi,withdrawal,stock,machine