/* eslint-disable import/no-anonymous-default-export */
import {
AGREGAR_PERSONA,
AGREGAR_PERSONA_EXITO,
AGREGAR_PERSONA_ERROR,
COMENZAR_DESCARGA_PERSONA,
DESCARGA_PERSONA_EXITO,
DESCARGA_PERSONA_ERROR,
OBTENER_PERSONA_EDITAR,
PERSONA_EDITADA_EXITO,
PERSONA_EDITADA_ERROR,
OBTENER_PERSONA_ELIMINAR,
PERSONA_ELIMINADA_EXITO,
PERSONA_ELIMINADA_ERROR
} from "../types"

const initialState = {
    personas: [],
    error: null,
    loading: false,
    persona: null,
    personaeliminar: null
}

export default function (state = initialState, action){
    switch (action.type) {   
        case AGREGAR_PERSONA:
            return{
                ...state,
                loading: action.payload
            } 
        case AGREGAR_PERSONA_EXITO:
            return{
                ...state,
                loading: false,
                personas: [...state.personas, action.payload]
            }
        case AGREGAR_PERSONA_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case COMENZAR_DESCARGA_PERSONA:
            return{
                ...state,
                loading: action.payload
            }
        case DESCARGA_PERSONA_EXITO:
            return{
                ...state,
                personas: action.payload
            }
        case DESCARGA_PERSONA_ERROR:
            return{
                ...state,
                loading: action.payload
            }
        case OBTENER_PERSONA_EDITAR:
            return{
                ...state,
                persona: action.payload
            }
        case PERSONA_EDITADA_EXITO:
            return{
                ...state,
                personaeditar:null,
                personas: state.personas.map(persona =>
                persona.id===action.payload.id ? persona = action.payload:
                persona
            )
            }
        case PERSONA_EDITADA_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case OBTENER_PERSONA_ELIMINAR:
            return{
                ...state,
                personaeliminar: action.payload
            }
        case PERSONA_ELIMINADA_EXITO:
            return{
                ...state,
                personas: state.personas.filter(personas=>personas.id !== state.personaeliminar),
                personaeliminar:null
            }
        case PERSONA_ELIMINADA_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}