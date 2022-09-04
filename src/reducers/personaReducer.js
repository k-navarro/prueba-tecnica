/* eslint-disable import/no-anonymous-default-export */

import {
    AGREGAR_PERSONA,
    AGREGAR_PERSONA_ERROR,
    AGREGAR_PERSONA_EXITO,
    COMENZAR_DESCARGA_PERSONAS,
    DESCARGA_PERSONAS_ERROR,
    DESCARGA_PERSONAS_EXITO,
    OBTENER_PERSONA_EDITAR,
    OBTENER_PERSONA_ELIMINAR,
    PERSONA_EDITADA_ERROR,
    PERSONA_EDITADA_EXITO,
    PERSONA_ELIMINADA_ERROR,
    PERSONA_ELIMINADA_EXITO,
  } from "../types";
  
  const initialState = {
    personas: [],
    error: null,
    loading: false,
    persona: null,
    personaeliminar: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case AGREGAR_PERSONA:
        return {
          ...state,
          loading: action.payload,
        };
      case AGREGAR_PERSONA_EXITO:
        return {
          ...state,
          loading: false,
          personas: [...state.personas, action.payload],
        };
      case AGREGAR_PERSONA_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case COMENZAR_DESCARGA_PERSONAS:
        return {
          ...state,
          loading: action.payload,
        };
      case DESCARGA_PERSONAS_EXITO:
        return {
          ...state,
          personas: action.payload,
        };
      case DESCARGA_PERSONAS_ERROR:
        return {
          ...state,
          loading: action.payload,
        };
      case OBTENER_PERSONA_EDITAR:
        return {
          ...state,
          persona: action.payload,
        };
      case PERSONA_EDITADA_EXITO:
        return {
          ...state,
          personaeditar: null,
          personas: state.personas.map((persona) =>
            persona.id === action.payload.id
              ? (persona = action.payload)
              : persona
          ),
        };
      case PERSONA_EDITADA_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case OBTENER_PERSONA_ELIMINAR:
        return {
          ...state,
          personaeliminar: action.payload,
        };
      case PERSONA_ELIMINADA_EXITO:
        return {
          ...state,
          personas: state.personas.filter(
            (personas) => personas.id !== state.personaeliminar
          ),
          personaeliminar: null,
        };
      case PERSONA_ELIMINADA_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }