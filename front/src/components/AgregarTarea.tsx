import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AgregarTarea(props: any) {
  const [show, setShow] = useState(false);
  const [tarea, setTarea] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
            className="w-full h-8 cursor-pointer rounded-lg bg-teal-200 text-indigo-800 hover:bg-teal-300 shadow-md"
            onClick={handleShow}
            >
            Agregar tarea
        </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Tarea {props.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="agregarTarea" 
                  className="w-full"
                  
                  onSubmit={(e) => {
                    e.preventDefault();
                    props.agregarTarea(tarea, props.id);}}
                  >
                <input  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="name"
                        type="text"
                        onChange={(e)=>setTarea(e.target.value)}
                        autoFocus
                        />
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          
          <button onClick={handleClose} form='agregarTarea'>
            Aceptar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AgregarTarea;