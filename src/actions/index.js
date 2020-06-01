import userAxios from '../config/user'
import Swal from 'sweetalert2'

import {
    AUTH_SIGN_IN,
    AUTH_SIGN_UP,
    AUTH_SIGN_OUT,
    AUTH_ERROR
} from '../types'

export const createUserRegister = (user) => {

    return async dispatch => {
        try {
            const res = await userAxios.post('/netflix-api/auth/signup', user)

            dispatch({
                type: AUTH_SIGN_UP,
                payload: res.data.token
            })

            localStorage.setItem('JWT_TOKEN', res.data.token)

        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email is already in use'
            })
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error , intenta de nuevo '

            })

        }
    }
}

export const authUserAction = (user) => {

    return async dispatch => {
        try {
            const res = await userAxios.post('/netflix-api/auth/signin', user)
            dispatch({
                type: AUTH_SIGN_IN,
                payload: res.data.token
            })
            Swal.fire(
                'Correcto',
                'El Usuario ingreso correctamente',
                'success'
            )

        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email and password combination isn\'t valid'
            })

        }

    }
}
export const signOut = () => {
    return dispatch => {

        localStorage.removeItem('JWT_TOKEN')

        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ''
        })
    }
}

export const oauthGoogle = data => {

    return async dispatch => {


        const res = await userAxios.post('/netflix-api/auth/google', {
            access_token: data
        })


        dispatch({
            type: AUTH_SIGN_UP,
            payload: res.data.token
        })
        localStorage.setItem('JWT_TOKEN', res.data.token)

    }
}

export const oauthFacebook = data => {

    return async dispatch => {

        const res = await userAxios.post('/netflix-api/auth/facebook', {
            access_token: data
        })

        dispatch({
            type: AUTH_SIGN_UP,
            payload: res.data.token
        })

        localStorage.setItem('JWT_TOKEN', res.data.token)
    }
}