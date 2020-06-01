import React, { useRef } from 'react'
import { TextField, FormControl, Button } from '@material-ui/core'
import Style from './Style'
// import { useForm } from 'react-hook-form'
const Edit = ({ currentUser, updateUser }) => {
    console.log(updateUser)
    const classes = Style()
    // const [edit, setEdit] = React.useState(false)
    // console.log(currentUser)
    // const { register, errors, handleSubmit } = useForm({
    //     defaultValues: currentUser
    // })
    const valorActual = { ...currentUser }

    const [editUser, setUpdateUser] = React.useState(valorActual)
    console.log(editUser)
    const updateDato = e => {

        setUpdateUser({

            ...editUser,
            [e.target.name]: e.target.value
        })
    }

    const editarDato = (e) => {
        e.preventDefault()
        console.log(editUser)
        updateUser(valorActual.id, editUser)
        e.target.reset()
    }
    return (
        <form onSubmit={editarDato} >
            <FormControl margin='auto' className={classes.containerForm} >
                <TextField margin='auto'
                    id="name"
                    label="Ingresar su nombre"
                    name="name"
                    value={editUser.name}
                    onChange={updateDato}
                />
                <TextField margin='auto'
                    id="lastname"
                    label="Ingresar su apellido"

                    name="lastname"
                    // ref={register({
                    //     required: { value: true, message: 'Campo requerido' }
                    // })}
                    value={editUser.lastname}
                    onChange={updateDato}
                />
                <TextField margin='auto'
                    id="task"
                    label="Ingresar una tarea"
                    name="task"
                    // ref={register({
                    //     required: { value: true, message: 'Campo requerido' }
                    // })}
                    value={editUser.task}
                    onChange={updateDato}
                />
                <Button type='submit' variant='contained' color='primary' className={classes.containerButton}   >
                    Editar
            </Button>

            </FormControl>
        </form>
    )
}

export default Edit
