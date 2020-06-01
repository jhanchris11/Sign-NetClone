import React from 'react'
import { Card, CardHeader, CardContent, FormControl, TextField, Button, Dialog, Slide } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../../utils/MaterialTheme'
import CustomPassword from '../CustomPassword/CustomPassword'
import Styles from '../SignIn/Style'
import { createUserRegister } from '../../actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const SignUp = () => {

    const classes = Styles()
    const [openLogin, setOpenLogin] = React.useState(true)
    const handleCloseLogin = () => {
        setOpenLogin(false)
    }
    //we need to call some actionCreator
    const [email, setEmail] = React.useState('')
    const [nombre, setName] = React.useState('')
    const [celular, setPhone] = React.useState('')
    const [password, setPassword] = React.useState('')
    const history = useHistory()

    const dispatch = useDispatch()

    const registerUser = user => dispatch(createUserRegister(user))

    const handlerSignUp = (e) => {

        e.preventDefault()

        if (nombre.trim() === '' || celular.trim() === '' || email.trim() === '' || password.trim() === '') {
            return
        }

        registerUser({
            nombre,
            celular,
            email,
            password
        })
        history.push('/signin')
    }
    return (
        <Dialog
            open={openLogin}
            onClose={handleCloseLogin}
            keepMounted
            TransitionComponent={Transition}
        >
            <ThemeProvider theme={theme}>
                <Card className={classes.baseContainer}>
                    <CardHeader className={classes.header}>
                        Register
        </CardHeader>
                    <CardContent className={classes.content}>
                        <div className={classes.image}>
                            {/* <img src={loginImg} className={classes.img} /> */}
                        </div>
                        <form className={classes.form} >
                            <FormControl className={classes.formControl}>

                                <TextField
                                    name='nombre'
                                    value={nombre}
                                    className={classes.input}
                                    margin='normal'
                                    label='Name'
                                    helperText='Put your name'
                                    variant='filled'
                                    onChange={e => setName(e.target.value)}

                                />

                            </FormControl>
                            <FormControl className={classes.formControl} >

                                <TextField
                                    name='celular'
                                    value={celular}

                                    className={classes.input}
                                    margin='normal'
                                    label='Phone'
                                    helperText='Put your phone'
                                    variant='filled'
                                    onChange={e => setPhone(e.target.value)}

                                />

                            </FormControl>
                            <FormControl className={classes.formControl} >

                                <TextField
                                    name='email'
                                    value={email}
                                    className={classes.input}
                                    margin='normal'
                                    label='Email'
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
                                onClick={handlerSignUp}
                            >SignUp
                        </Button>
                        </form>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </Dialog>
    )
}

export default SignUp
