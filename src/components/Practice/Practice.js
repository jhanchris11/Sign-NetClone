import React from 'react'
import { Button, FormControl, TextField, Table, TableRow, TableCell, Paper, TableHead, TableBody } from '@material-ui/core'
import Style from './Style'
import MarcoTable from './MarcoTable'
import shortid from 'shortid'
import { useForm } from 'react-hook-form'
import Edit from './Edit'
const Practice = ({ history }) => {

    const [arr, setArr] = React.useState([0, 1, 2, 3, 4, 5])
    const [num, setNumero] = React.useState(0)



    const [name, setName] = React.useState('')

    const [lastname, setLastName] = React.useState('')

    const [task, setTask] = React.useState('')

    const [datos, setDato] = React.useState([])

    const [edit, setEdit] = React.useState(false)

    const [currentUser, setCurrentUser] = React.useState({
        id: '',
        name: '',
        lastname: '',
        task: ''
    })
    // const { register, errors, handleSubmit } = useForm({
    //     defaultValues: currentUser
    // })
    const classes = Style()

    const handleOnClick = () => {
        console.log('Aumentando ..')
        setNumero(num + 1)
        setArr([
            ...arr,
            num + 5
        ])
    }

    // const handlerChange = (e) => {
    //     // console.log(e)
    //     setDatos({
    //         ...datos,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleEnviarDatos = (e) => {
    //     e.preventDefault()
    //     console.log(datos)
    //     // e.target.reset()
    //     setDatos('')
    // }
    const guardarDatos = (e) => {
        e.preventDefault()
        setName(num + 1)

        setDato([
            ...datos,
            {
                name,
                lastname,
                task,
                id: shortid.generate()
            }
        ])
        e.target.reset()
    }

    const deleteUser = (id) => {
        setDato(datos.filter(data => data.id !== id))
    }

    const editUser = (user) => {
        setEdit(true)
        console.log(user)

        setCurrentUser({
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            task: user.task
        })
    }
    const updateUser = (id, updateUser) => {
        setEdit(false)
        console.log(id,updateUser)
        setDato(datos.map(dato => dato.id === id ? updateUser : dato))
    }

    return (
        <div>
            <h1>Arreglo de Numeros :</h1>
            <h1>Agregar Numero : {num}</h1>
            <Button color='primary' onClick={handleOnClick} variant='contained'>Agregar</Button>
            <ul>
                {arr.map((item, index) => (
                    <li key={index}>{item} - {index}</li>
                ))}
            </ul>
            {edit ? <Edit currentUser={currentUser} updateUser={updateUser} /> :
                <form onSubmit={guardarDatos}>
                    <FormControl margin='auto' className={classes.containerForm}  >
                        <TextField margin='auto'
                            id="name"
                            label="Ingresar su nombre"

                            onChange={e => setName(e.target.value)}
                        />
                        <TextField margin='auto'
                            id="lastname"
                            label="Ingresar su apellido"
                            // name='lastname'

                            onChange={e => setLastName(e.target.value)}
                        />
                        <TextField margin='auto'
                            id="task"
                            label="Ingresar una tarea"
                            // name='lastname'

                            onChange={e => setTask(e.target.value)}
                        />
                        <Button type='submit' variant='contained' color='primary' className={classes.containerButton} >
                            Agregar
                    </Button>
                    </FormControl>

                </form>
            }
            <br />
            <br />
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Tarea</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datos.map((dato) => (
                            <MarcoTable key={dato.id} dato={dato} deleteUser={deleteUser} editUser={editUser} />
                        ))}

                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}

export default Practice
