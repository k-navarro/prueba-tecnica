import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { Fragment, useEffect } from "react";
import { Table, Tooltip } from "antd";
import {
  borrarPersonaAction,
  obtenerPersonasAction,
} from "../actions/personaAction";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Personas = () => {
  const dispatch = useDispatch();
  const personas = useSelector((state) => state.personas.personas);

  const eliminarPersona = (id) => {
    dispatch(borrarPersonaAction(id));
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

  return <Table dataSource={personas} columns={columna} />;
};

export default Personas;
