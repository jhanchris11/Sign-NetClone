import React, { Fragment } from 'react'
import clsx from 'clsx'
import { InputLabel, FilledInput, IconButton, InputAdornment } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';


const CustomPassword = ({ inputClass, setPassword }) => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    // console.log(password)
    const handleChange = prop => e => {
        // setValues({ ...values, [prop]: event.target.value });
        // console.log([e.target.name]: e.target.value)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        setPassword(
            values.password
        )
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <Fragment>
            <InputLabel htmlFor="standard-adornment-password" >Password</InputLabel>
            <FilledInput
                id="standard-adornment-password"

                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}

                // handleChange={handleChange}
                className={clsx(inputClass)}
                name='password'
                password={values.password}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </Fragment>
    )
}

export default CustomPassword


CustomPassword.prototype = {}
