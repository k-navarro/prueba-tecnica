/* eslint-disable import/no-anonymous-default-export */
import {
AGREGAR_PERSONA,
AGREGAR_PERSONA_EXITO,
AGREGAR_PERSONA_ERROR,
COMENZAR_DESCARGA_PERSONA,
DESCARGA_PERSONA_EXITO,
DESCARGA_PERSONA_ERROR,
OBTENER_PERSONA_EDITAR
} from "../types"

const initialState = {
    personas: [],
    error: null,
    loading: false,
    persona: null
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
        case OBTENER_PERSONA_EDITAR:
            return{
                ...state,
                persona: action.payload
            }
        default:
            return state;
    }
}