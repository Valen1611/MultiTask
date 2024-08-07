--- reiniciar
drop table categorias ;
create table categorias (
	nombreCategoria varchar(255) unique not null,
	descripcion varchar(255),
	
	primary key (nombreCategoria)
);

drop table tareas;
create table tareas (
	tareaID SERIAL,
	nombreTarea varchar(255) not null,
	categoria varchar(255),
	hecha bool default false,
	
	PRIMARY KEY (tareaID),
    FOREIGN KEY (categoria) REFERENCES Categorias(nombreCategoria)
);


--- rellenar categorias
insert into categorias (nombreCategoria) values ('matematica');
insert into categorias (nombreCategoria) values ('algoritmos2');
insert into categorias (nombreCategoria) values ('cocina');
insert into categorias (nombreCategoria, descripcion) values ('otras', 'tareas de todo tipo');

--- rellenar tareas
insert into tareas (nombreTarea, categoria) values ('estudiar parcial', 'matematica');
insert into tareas (nombreTarea, categoria) values ('lavar platos', 'cocina');
insert into tareas (nombreTarea, categoria) values ('comprar detergente', 'cocina');
insert into tareas (nombreTarea, categoria) values ('limpiar mesada', 'cocina');
insert into tareas (nombreTarea, categoria) values ('estudiar parcial', 'algoritmos2');
insert into tareas (nombreTarea, categoria) values ('comprar pan', 'otras');
insert into tareas (nombreTarea, categoria) values ('pagar telefono', 'otras');

select * from categorias;

select * from tareas t ;