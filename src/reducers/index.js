import {combineReducers} from "redux"
import personaReducer from "./personaReducer"

export default combineReducers({
    personas: personaReducer
})