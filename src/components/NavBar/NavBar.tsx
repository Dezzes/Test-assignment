import React from 'react';
import styles from "./NavBar.module.css"
import { Link, useNavigate } from "react-router-dom"
import { Box, AppBar, Toolbar, Container, Button } from '@mui/material';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../../store/reducers/action-creators/auth';

const NavBar = () => {

    const { isAuth } = useTypedSelector(state => state.auth)
    const dispatch = useDispatch()

    // 2 variants of navbar depending on Auth state
    return (
        isAuth
            ?
            <Box component="nav" className={styles.navbar}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Container>
                            <Button onClick={() => dispatch(AuthActionCreators.logout())} className={styles.loginBtn} color="inherit" component={Link} to="/login">Выйти</Button>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box>
            :
            <Box component="nav" className={styles.navbar}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Container>
                            <Button className={styles.loginBtn} color="inherit" component={Link} to="/login">Войти</Button>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box>
    );
};

export default NavBar;
