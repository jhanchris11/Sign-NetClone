import React from 'react'
import { TableRow, TableCell, Button } from '@material-ui/core'
import Style from './Style'
import { useForm } from 'react-hook-form'


const MarcoTable = ({ dato, deleteUser, editUser }) => {


    const classes = Style()

    // const eliminar = (index) => {
    //     const arrayEliminado = datos.filter(data => data.index !==index)
    //     console.log(arrayEliminado)
    // }
  

    return (
        <TableRow>
            <TableCell>{dato.name}</TableCell>
            <TableCell>{dato.lastname}</TableCell>
            <TableCell>{dato.task}</TableCell>
            <TableCell>

                <Button color='primary' variant='contained'
                    onClick={() => editUser(dato)}
                >
                    Editar
            </Button>
                <Button color='secondary' variant='contained' className={classes.buttonEli}
                    onClick={() => deleteUser(dato.id)}
                >
                    Eliminar
            </Button>
            </TableCell>
        </TableRow>
    )
}

export default MarcoTable
