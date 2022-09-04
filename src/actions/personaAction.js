import {
  AGREGAR_PERSONA,
  AGREGAR_PERSONA_ERROR,
  AGREGAR_PERSONA_EXITO,
  COMENZAR_DESCARGA_PERSONAS,
  COMENZAR_EDICION_PERSONA,
  DESCARGA_PERSONAS_ERROR,
  DESCARGA_PERSONAS_EXITO,
  OBTENER_PERSONA_EDITAR,
  OBTENER_PERSONA_ELIMINAR,
  PERSONA_EDITADA_ERROR,
  PERSONA_EDITADA_EXITO,
  PERSONA_ELIMINADA_ERROR,
  PERSONA_ELIMINADA_EXITO,
} from "../types";

import toast from "react-hot-toast";
import { useFetch } from "../config/axios";

const agregarPersona = () => ({
  type: AGREGAR_PERSONA,
  payload: true,
});

const agregarPersonaExito = (persona) => ({
  type: AGREGAR_PERSONA_EXITO,
  payload: persona,
});

const agregarPersonaError = (estado) => ({
  type: AGREGAR_PERSONA_ERROR,
  payload: estado,
});


export const crearNuevaPersonaAction = (persona) => {
  return async (dispatch) => {
    dispatch(agregarPersona());
    try {
      const { requestAxios } = useFetch();
      await requestAxios.post("/public/v2/users", persona);
      toast.success("El usuario se ha creado exitosamente");
      dispatch(agregarPersonaExito(persona));
    } catch (error) {
      toast.error(`Ooops! parece que tenemos un error - ${error?.message} `);
      dispatch(agregarPersonaError(true));
    }
  };
}

const descargarPersonas = () => ({
  type: COMENZAR_DESCARGA_PERSONAS,
  payload: true,
});

const descargarPersonasExito = (persona) => ({
  type: DESCARGA_PERSONAS_EXITO,
  payload: persona,
});

const descargarPersonasError = () => ({
  type: DESCARGA_PERSONAS_ERROR,
  payload: true,
});

export const obtenerPersonasAction = () => {
  return async (dispatch) => {
    dispatch(descargarPersonas());
    try {
      const { requestAxios } = useFetch();
      const personas = await requestAxios.get("/public/v2/users");
      dispatch(descargarPersonasExito(personas.data));
    } catch (error) {
      dispatch(descargarPersonasError(error));
    }
  };
}

const obtenerPersonaEditarAction = (persona) => ({
  type: OBTENER_PERSONA_EDITAR,
  payload: persona,
});

export const obtenerPersonaedit = (persona) => {
  return (dispatch) => {
    dispatch(obtenerPersonaEditarAction(persona));
  };
};

export const obtenerPersonaEditar = (id) => {
  return async (dispatch) => {
    dispatch(obtenerPersonaedit(id));

    try {
      const { requestAxios } = useFetch();
      const personas = await requestAxios.get(`/public/v2/users/${id}`);
      dispatch(obtenerPersonaEditarAction(personas.data));
    } catch (error) {
      console.log(error, "error");
    }
  };
}

const editarPersona = () => ({
  type: COMENZAR_EDICION_PERSONA,
});


const editarPersonaExito = (persona) => ({
  type: PERSONA_EDITADA_EXITO,
  payload: persona,
});

const editarPersonaError = () => ({
  type: PERSONA_EDITADA_ERROR,
  payload: true,
});


export const editarPersonaAction = (id, data) => {
  return async (dispatch) => {
    dispatch(editarPersona(id));
    try {
      const { requestAxios } = useFetch();
      const persona = await requestAxios.put(
        `/public/v2/users/${id}`,
        data
      );
      dispatch(editarPersonaExito(persona.data));
    } catch (error) {
      dispatch(editarPersonaError(error));
    }
  };
}

const obtenerPersonaEliminar = (id) => ({
  type: OBTENER_PERSONA_ELIMINAR,
  payload: id,
});

const eliminarPersonaExito = () => ({
  type: PERSONA_ELIMINADA_EXITO,
});
const eliminarPersonaError = () => ({
  type: PERSONA_ELIMINADA_ERROR,
  payload: true,
});


export const borrarPersonaAction = (id) => {
  return async (dispatch) => {
    dispatch(obtenerPersonaEliminar(id));
    try {
      const { requestAxios } = useFetch();
      await requestAxios.delete(`/public/v2/users/${id}`);
      dispatch(eliminarPersonaExito(id));
    } catch (error) {
      dispatch(eliminarPersonaError());
    }
  };
}