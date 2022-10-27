CREATE DATABASE ruralesurgs;

CREATE TABLE responsable(
    id serial NOT NULL,
    nombres varchar(20),
    apellidos varchar(25),
    direccion varchar(150),
    ciudad varchar(15),
    fecha_nacimiento date,
    rh varchar(3),
    CONSTRAINT pk_responsable PRIMARY KEY (id)
);

CREATE TABLE paciente(
    id serial NOT NULL,
    nombres varchar(20),
    apellidos varchar(25),
    direccion varchar(150),
    ciudad varchar(15),
    fecha_nacimiento date,
    rh varchar(3),
    alergias varchar(200),
    enfermedades varchar(200),
    historia_med varchar(500),
    id_responsable serial NOT NULL,
    peso decimal(3),
    altura decimal(1),
    CONSTRAINT pk_paciente PRIMARY KEY (id),
    CONSTRAINT fk_responsable FOREIGN KEY (id_responsable) REFERENCES "responsable" (id)
);

CREATE TABLE medico(
    id serial NOT NULL,
    nombres varchar(20),
    apellidos varchar(25),
    direccion varchar(150),
    ciudad varchar(15),
    fecha_nacimiento date,
    rh varchar(3),
    especialidad varchar(15),
    turno varchar(10),
    CONSTRAINT pk_medico PRIMARY KEY (id) 
);

CREATE TABLE consulta(
    id serial NOT NULL,
    id_med serial NOT NULL,
    id_pac serial NOT NULL,
    motivo varchar(250),
    CONSTRAINT pk_consulta PRIMARY KEY (id),
    CONSTRAINT fk_med FOREIGN KEY (id_med) REFERENCES "medico" (id),
    CONSTRAINT fk_pac FOREIGN KEY (id_pac) REFERENCES "paciente" (id)
);

CREATE TABLE medicamento(
    id serial NOT NULL,
    nombre varchar(25),
    dosis varchar(25),
    CONSTRAINT pk_medic PRIMARY KEY (id)
);

CREATE TABLE incapacidad(
    id serial NOT NULL,
    fecha_ini date,
    fecha_fin date,
    CONSTRAINT pk_inc PRIMARY KEY (id)
);

CREATE TABLE diagnostico(
    id serial NOT NULL,
    id_medic serial NOT NULL,
    id_inc serial NOT NULL,
    diagnostico varchar(500),
    CONSTRAINT pk_diag PRIMARY KEY (id),
    CONSTRAINT fk_medic FOREIGN KEY (id_medic) REFERENCES "medicamento" (id),
    CONSTRAINT fk_inc FOREIGN KEY (id_inc) REFERENCES "incapacidad" (id)
);

INSERT INTO medicamento(nombre, dosis) VALUES
    ('acetaminofen', '200mg'),
    ('dolex', '500mg');