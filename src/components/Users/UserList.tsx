import React from 'react';
import { User } from '../../models/User';
import UserItem from './UserItem/UserItem';

interface Props {
    users: User[]
}

const UserList: React.FC<Props> = ({ users }) => {
    return (
        <div>
            {users.map((user) => (
                <UserItem user={user} key={user.id} />
            ))}
        </div>
    );
};

export default UserList;
