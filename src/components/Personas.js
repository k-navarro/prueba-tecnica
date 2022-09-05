import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { Fragment, useEffect, useState } from "react";
import { Table, Tooltip } from "antd";
import {
  borrarPersonaAction,
  obtenerPersonasAction,
} from "../actions/personaAction";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Personas = () => {
  const dispatch = useDispatch();
  const personas = useSelector((state) => state.personas.personas);
  const [countPage, setCountPage] = useState(1)

  const eliminarPersona = (id) => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF7851',
      cancelButtonColor: '#78C2AD',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(borrarPersonaAction(id));
      }
    })
  };

  useEffect(() => {
    const cargarPersona = () => dispatch(obtenerPersonasAction());
    cargarPersona();
  }, [dispatch]);

  const columna = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      className: "PrimeraLetraMayuscula",
    },
    {
      title: "NOMBRE",
      dataIndex: "name",
      key: "name",
      className: "PrimeraLetraMayuscula",
    },
    {
      title: "CORREO",
      dataIndex: "email",
      key: "email",
      className: "PrimeraLetraMayuscula",
    },
    {
      title: "GENERO",
      dataIndex: "gender",
      key: "gender",
      className: "PrimeraLetraMayuscula",
    },
    {
      title: "ESTADO",
      dataIndex: "status",
      key: "status",
      className: "PrimeraLetraMayuscula",
    },
    {
      title: "ACCIONES",
      key: "action",
      render: (_, record) => (
        <Fragment>
          <Tooltip title='Eliminar'>
            <button
              style={{
                border: "none",
                background: "transparent",
                marginRight: "5px",
              }}
              onClick={() => eliminarPersona(record.id)}
            >
              <AiFillDelete size={24} color='#FF7851' />
            </button>
          </Tooltip>

          <Tooltip title='Edit plan' placement='bottom'>
            <Link to={`/persona/editar/${record.id}`}>
              <AiOutlineEdit size={24} color='#FF7851' />
            </Link>
          </Tooltip>
        </Fragment>
      ),
    },
  ];

  return (
    <div>
      <Table pagination={false}
        dataSource={personas} columns={columna} />
    <div className="text-right mt-1 mb-2">
      <button 
        className="btn-outline-secondary text-uppercase mr-3 text-right mb-3 " 
        disabled={countPage === 1} onClick={() => {
        setCountPage(countPage - 1)
        const cargarPersona = () => dispatch(obtenerPersonasAction(countPage - 1));
        cargarPersona();
      }}>Anterior</button>
      <button className="btn-outline-secondary font-weight-bold text-uppercase  mr-3 mb-3 " onClick={() => {
        setCountPage(countPage + 1)
        const cargarPersona = () => dispatch(obtenerPersonasAction(countPage + 1));
        cargarPersona();
      }}>Siguiente</button>
    </div>
  </div>
  );
};

export default Personas;
