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
                    element={<Navigate to="test-assignment/users" />}
                />
                <Route path='test-assignment/users' element={<Users />} />
            </Routes>
            :
            <Routes>
                <Route
                    path="*"
                    element={<Navigate to="test-assignment/login" />}
                />
                <Route path='test-assignment/login' element={<LoginForm />} />
            </Routes>
    );
};

export default AppRouter;
