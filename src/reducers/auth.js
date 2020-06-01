//Tomamos una estado y accion y luego va a pasar a todas las acciones posibles ,
//Por lo cual debemos iniciar este estado a algun valor predeterminado para que ejecute por defecto
import {
    AUTH_SIGN_UP,
    AUTH_SIGN_IN,
    AUTH_SIGN_OUT,
    AUTH_ERROR
} from '../types'

const DEFAULT_STATE = {
    isAutenticated: false,
    token: '',
    errorMessage: ''
}

export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case AUTH_SIGN_UP:
            return { ...state, token: action.payload, isAutenticated: true, errorMessage: '' }

        case AUTH_SIGN_OUT:
            return { ...state, token: action.payload, isAutenticated: false, errorMessage: '' }

        case AUTH_SIGN_IN:
            return { ...state, token: action.payload, isAutenticated: true, errorMessage: '' }

        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload }

        default:
            return state
    }
}