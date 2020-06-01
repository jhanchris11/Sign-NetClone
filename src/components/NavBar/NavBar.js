
import React from 'react'
import { useStyles } from './Style'
import { Button, IconButton, AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../../utils/MaterialTheme'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { useHistory } from 'react-router-dom'


const NavBar = (props) => {
    const history = useHistory()
    const classes = useStyles()

    const handleClickOpen = () => {
        history.push('/signin')
    }

    const signout = () => {
        props.signOut()
    }
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} aria-label="menu" color="inherit" >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" className={classes.title} align="center">Auth Facebook or Google </Typography>
                        {!props.isAuth ?

                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<PersonAddTwoToneIcon />}
                                onClick={handleClickOpen}
                            > Log In/Up
                        </Button> : null

                        }
                        {props.isAuth ?
                            [<Link to={'/signout'} style={{ textDecoration: 'none' }} className={classes.button}>
                                <Button
                                    //  className={classes.button}
                                    variant="contained"
                                    color="default"
                                    startIcon={<ExitToAppOutlinedIcon />}
                                    onClick={signout}
                                > Sign Out
                        </Button>
                            </Link>,
                            <Link to={'/dashboard'} style={{ textDecoration: 'none' }} className={classes.button}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<HomeWorkTwoToneIcon />}
                                > Dashboard
                        </Button>
                            </Link>
                            ] : null
                        }



                    </Toolbar>
                </AppBar>
            </div>
        </ThemeProvider>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        isAuth: state.auth.isAutenticated
    }

}
export default connect(mapStateToProps, actions)(NavBar)
