import React from 'react'
import { Card, CardHeader, CardContent, FormControl, TextField, Button } from '@material-ui/core'
import Styles from './Style'
import loginImg from '../../img/github.png'
import CustomPassword from '../CustomPassword/CustomPassword'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../../utils/MaterialTheme'
import { useDispatch } from 'react-redux'
import { authUserAction, oauthGoogle, oauthFacebook } from '../../actions/index'
import { Link, useHistory } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'

const SignIn = ({ handleClose }) => {

    const classes = Styles()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    const authUser = user => dispatch(authUserAction(user))

    const handlerSignIn = e => {
        e.preventDefault()
        if (email.trim() === '') {
            return
        }
        authUser({
            email,
            password
        })

        history.push('/dashboard')
    }

    const responseGoogle = async user => {
        dispatch(oauthGoogle(user.accessToken))
        history.push('/dashboard')
    }


    const responseFacebook = async user => {
        console.log(user)
        await dispatch(oauthFacebook(user.accessToken))
        history.push('/dashboard')
    }

    return (

        <ThemeProvider theme={theme}>
            <Card className={classes.baseContainer}>
                <CardHeader className={classes.header}>
                    Login
            </CardHeader>
                <CardContent className={classes.content}>
                    <div className={classes.image}>
                        <img src={loginImg} className='img-class' alt='img' />
                    </div>
                    <form className={classes.form}>
                        <FormControl className={classes.formControl} >

                            <TextField
                                name='email'
                                className={classes.input}
                                margin='normal'
                                label='User'
                                helperText='Put your email'
                                variant='filled'
                                onChange={e => setEmail(e.target.value)}

                            />

                        </FormControl>
                        <FormControl className={classes.formControl} variant='filled' >

                            <CustomPassword
                                inputClass={classes.input}
                                setPassword={setPassword}
                            />

                        </FormControl>

                        <Button
                            className={classes.button}
                            variant='contained'
                            color='default'
                            type='submit'
                            onClick={handlerSignIn}

                        >SignIn</Button>

                        <Link to={'/signup'} style={{ textDecoration: 'none' }}>
                            <Button
                                className={classes.button}
                                variant='contained'
                                color='default'

                                type='button'
                                onClick={handleClose}

                            >SignUp
                            </Button>
                        </Link>
                        <FormControl>
                            <FacebookLogin
                                appId='842115922931529'

                                textButton='Facebook'
                                fields='name,email,picture'

                                callback={responseFacebook}
                            />

                        </FormControl>

                        <FormControl>
                            <GoogleLogin
                                clientId='1042159763873-d9rsvup0jhid9eo88udb8dd5pib5vpnc.apps.googleusercontent.com'
                                buttonText='Google'
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                className={classes.button}
                            />
                        </FormControl>
                    </form>
                </CardContent>
            </Card>
        </ThemeProvider>

    )
}

export default SignIn
