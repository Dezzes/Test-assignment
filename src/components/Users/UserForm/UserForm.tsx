import { FormControl, TextField, Button, Typography, FormControlLabel, Switch } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NewUser } from '../../../models/User';
import { UserActionCreators } from '../../../store/reducers/action-creators/user';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import styles from "./UserForm.module.css"


const PWD_REG = /^(?=.*[A-Z])(?=.*[0-9]).{8,150}$/

const UserForm: React.FC = () => {

    const dispatch = useDispatch()

    const { error, loading } = useTypedSelector(state => state.users)

    const [user, setUser] = useState<NewUser>({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        is_active: true
    })
    useEffect(() => {
        dispatch(UserActionCreators.setError(""))
    }, [user.username, user.password])

    function validatePwd() {
        if (!PWD_REG.test(user.password)) {
            dispatch(UserActionCreators.setError("Пароль должен быть не менее 8 символов, а также содержать 1 цифру и 1 заглавную букву"))
            return true
        }
        return false
    }

    function addNewUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (validatePwd()) return

        dispatch(UserActionCreators.addUser(user))

        setUser({
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            is_active: true
        })
    }

    return (
        <FormControl component="form" fullWidth margin='normal' onSubmit={addNewUser}>

            {error ? <Typography className={styles.errorMsg}>{error}</Typography> : ""}

            <TextField
                required
                margin='normal'
                id="outlined-basic-username"
                label="Имя пользователя"
                variant="outlined"
                sx={{ background: "white" }}
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <TextField
                helperText="Пароль должен быть не менее 8 символов, а также содержать 1 цифру и 1 заглавную букву"
                required
                type="password"
                margin='normal'
                id="outlined-basic-password"
                label="Пароль"
                variant="outlined"
                sx={{ background: "white" }}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <TextField
                margin='normal'
                id="outlined-basic-first_name"
                label="Имя"
                variant="outlined"
                fullWidth
                sx={{ background: "white" }}
                value={user.first_name}
                onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            />
            <TextField
                margin='normal'
                id="outlined-basic-last_name"
                label="Фамилия"
                variant="outlined"
                sx={{ background: "white" }}
                value={user.last_name}
                onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            />
            <FormControlLabel control={
                <Switch
                    checked={user.is_active}
                    onChange={() => setUser({ ...user, is_active: !user.is_active })}
                />}
                label={user.is_active ? "Активен" : "Не активен"}
            />
            <Button
                className={styles.createBtn}
                type="submit"
                variant="contained"
                color="success"
            >
                Создать пользователя
            </Button>
        </FormControl>
    )
}

export default UserForm