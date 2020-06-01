import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import { Dialog, Slide } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Login = ({ open }, props) => {


    const history = useHistory()
    console.log({ open })
    const [openSignIn, setOpenSignIn] = React.useState(true)

    console.log(props)
    const handleClickSignIn = () => {

        setOpenSignIn(true)
    }
    const handleCloseSignIn = () => {
        setOpenSignIn(false)
        history.push('/')
    }


    return (
        <div>
            <Dialog
                open={openSignIn}
                onClose={handleCloseSignIn}
                keepMounted
                TransitionComponent={Transition}
                setOpenSignIn={setOpenSignIn}
                handleClickSignIn={handleClickSignIn}
            >
                <SignIn />
            </Dialog>
        </div>
    )
}

export default Login
