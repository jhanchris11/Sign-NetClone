import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    button: {
        margin: theme.spacing(1)
    }
}))