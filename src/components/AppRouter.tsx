import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Users from '../Pages/UsersPage';
import LoginForm from './Login/LoginForm';

const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.auth)
    return (
        isAuth ?
            <Routes>
                <Route
                    path="*"
                    element={<Navigate to="/users" />}
                />
                <Route path='/users' element={<Users />} />
            </Routes>
            :
            <Routes>
                <Route
                    path="*"
                    element={<Navigate to="/login" />}
                />
                <Route path='/login' element={<LoginForm />} />
            </Routes>
    );
};

export default AppRouter;
