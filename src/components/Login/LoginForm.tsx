import React, { useEffect, useRef, useState } from 'react'
import { Button, Input, Typography, Box, TextField, Container, FormControl } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { AuthActionCreators } from '../../store/reducers/action-creators/auth';
import styles from "./LoginForm.module.css"


const LoginForm = () => {

    const { isAuth, error } = useTypedSelector(state => state.auth)
    const dispatch = useDispatch()

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        dispatch(AuthActionCreators.setError(""))
    }, [username, password]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(AuthActionCreators.login(username, password))
        setUsername('')
        setPassword('')
    }
    return (
        <Box className={styles.formCenter}>
            <Box className={styles.form} component="form" onSubmit={handleSubmit}>

                <Typography className={error ? styles.errorMsg : ""}>{error}</Typography>

                <Typography variant='h5'>Авторизация</Typography>
                <TextField
                    autoFocus
                    error={Boolean(error)}
                    margin="normal"
                    required
                    id="outlined-required-username"
                    label="Логин"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                    error={Boolean(error)}
                    margin="normal"
                    required
                    id="outlined-required-password"
                    label="Пароль"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type='submit' variant="contained">Войти</Button>
            </Box>
        </Box>
    )
}

export default LoginForm