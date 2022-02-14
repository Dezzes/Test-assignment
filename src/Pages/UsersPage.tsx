import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserActionCreators } from '../store/reducers/action-creators/user';
import { Button, Container } from '@mui/material';
import { User } from '../models/User';
import UserItem from '../components/Users/UserItem/UserItem';
import ItemList from '../components/ItemList';
import UserFilter from '../components/Users/UserFilter';
import { useSort } from '../hooks/useSort';
import ModalForm from '../components/UI/Modal/ModalForm';
import UserForm from '../components/Users/UserForm/UserForm';

const UsersPage = () => {

    const { users } = useTypedSelector(state => state.users)
    const { query, sort } = useTypedSelector(state => state.filter) // params for users sorting

    const dispatch = useDispatch()

    const [modal, setModal] = useState<boolean>(false);

    const searchedAndSortedUsers = useSort(users, sort, query) // hook for sorting users by some user criteria

    useEffect(() => {
        dispatch(UserActionCreators.fetchUsers()) // fetch users from API
    }, [])

    return (
        <Container>
            <ModalForm isOpen={modal} setModal={setModal} title={"Создать пользователя"}>
                <UserForm />
            </ModalForm>

            <Button onClick={() => setModal(true)} variant="contained" sx={{ mt: "16px" }}>Создать пользователя</Button>

            <UserFilter />

            <ItemList items={searchedAndSortedUsers} renderItem={(user: User) => (
                <UserItem key={user.id} user={user} />
            )} />

        </Container>
    );
};

export default UsersPage;
