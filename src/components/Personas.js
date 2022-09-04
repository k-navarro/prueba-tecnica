import { Button, Table, Tooltip } from "antd";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerPersonaAction, obtenerPersonaedit, obtenerPersonaEditar } from "../actions/personaAction";
import { AiFillDelete, AiOutlineEdit, AiTwotoneEdit } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

const Personas = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const cargarPersona = () => dispatch(obtenerPersonaAction());
    cargarPersona();
  }, []);

  useEffect (()=>{
    console.log(id,"idddddd")
    const prueba = () => dispatch(obtenerPersonaEditar(id))
    
    prueba()
    
  },[])

  const eliminarPersona = (id) => {
    console.log(id);
  };
  
  const prueba=()=>dispatch(
    obtenerPersonaEditar(id))

  const personas = useSelector((state) => state.personas.personas);
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
          <Tooltip title="Eliminar">
            <button
              style={{ border: "none", background: "transparent" , marginRight:'5px' }}
              onClick={() => eliminarPersona(record.id)}
            >
              <AiFillDelete size={24} color="#FF7851" />
            </button>
          </Tooltip>

          <Tooltip title="Edit plan" placement="bottom" onClick={prueba()}>
            <Link to={`/persona/editar/${record.id}`}>
              <AiOutlineEdit size={24} color="#FF7851" />
            </Link>
          </Tooltip>
        </Fragment>
      ),
    },
  ];
  
  return (
    <Fragment>
      <Table dataSource={personas} columns={columna} />
    </Fragment>
  );
};

export default Personas;
