import {
  AGREGAR_PERSONA,
  AGREGAR_PERSONA_EXITO,
  AGREGAR_PERSONA_ERROR,
  
  COMENZAR_DESCARGA_PERSONA,
  DESCARGA_PERSONA_EXITO,
  DESCARGA_PERSONA_ERROR,
  OBTENER_PERSONA_EDITAR,
  COMENZAR_EDICION_PERSONA,
  PERSONA_EDITADA_EXITO,
  PERSONA_EDITADA_ERROR

} from "../types";
import axios from "axios";

import { useFetch } from "../config/axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

// crear nueva persona
const accestoken =
  "b8b84db74ed0a638cecdb1b5510ba7835bec9654043690d66691c90b51444a07";

export function crearNuevaPersonaAction(persona) {
  return async (dispatch) => {
    dispatch(agregarPersona());

    try {
      const { requestAxios } = useFetch();
      await requestAxios.post("/public/v2/users", persona);

      toast.success("El usuario se ha creado exitosamente");

      dispatch(agregarPersonaExito(persona));

    } catch (error) {
      toast.error(`Ooops! parece que tenemos un error - ${error?.message} ` );
      

      dispatch(agregarPersonaError(true));
    }
  };
}

const agregarPersona = () => ({
  type: AGREGAR_PERSONA,
  payload: true,
});

//guardar producto en la base de datos
const agregarPersonaExito = (persona) => ({
  type: AGREGAR_PERSONA_EXITO,
  payload: persona,
});

//error al guardar producto en la base de datos
const agregarPersonaError = (estado) => ({
  type: AGREGAR_PERSONA_ERROR,
  payload: estado,
});

export function obtenerPersonaAction (){
    return async (dispatch)=>{
        dispatch(descargarPersona())

        try {
            const { requestAxios } = useFetch();
            const personas = await requestAxios.get("/public/v2/users");
            dispatch(descargarPersonaExito(personas.data))

            
        } catch (error) {
            
        }
    }
}

const descargarPersona = () =>({
    type: COMENZAR_DESCARGA_PERSONA,
    payload:true
});

const descargarPersonaExito = (persona) => ({
    type: DESCARGA_PERSONA_EXITO,
    payload: persona

})

export const obtenerPersonaedit = persona =>{
  return(dispatch)=>{
      dispatch(obtenerPersonaEditarAction(persona))
  }
}
const obtenerPersonaEditarAction = persona =>({
  type:OBTENER_PERSONA_EDITAR,
  payload: persona
})

export function obtenerPersonaEditar (id) {
  return async(dispatch) =>{
      dispatch(obtenerPersonaedit(id))
    
      try {
        const { requestAxios } = useFetch();
            const personas = await requestAxios.get(`/public/v2/users/${id}`);
            dispatch(obtenerPersonaEditarAction(personas.data))          
      } catch (error) {
        console.log(error,"error")
      }
      
  }

}


export function editarPersonaAction (persona,data){
  
    return async (dispatch) => {
      dispatch(editarPersona(persona))

      try {
        
        const { requestAxios } = useFetch();
       const personas= await requestAxios.put(`/public/v2/users/${persona}`,data);
              
              dispatch(editarPersonaExito(personas.data ))
              console.log(personas,"aquiiii")
              console.log(data,"data del servisio")
              
      } catch (error) {
        dispatch(editarPersonaError(error))
      }
    
    }
}

const editarPersona = () =>({
    type:COMENZAR_EDICION_PERSONA,
})

const editarPersonaExito = persona =>({
  type:PERSONA_EDITADA_EXITO,
  payload:persona
})

const editarPersonaError = () => ({
  type:PERSONA_EDITADA_ERROR,
  payload: true
})