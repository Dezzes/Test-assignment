import { useMemo } from 'react';
import { User } from '../models/User';
import { UserFilter } from '../store/reducers/filter/types';

export const useSort = (users: User[], sort: keyof UserFilter | "", query: string): User[] => {

    const sortedUsers = useSortedUsers(users, sort) // sorts users by select (id or username)

    // sorts usernames by input ignoring lettercase
    const searchedAndSortedUsers = useMemo(() => {
        return sortedUsers.filter((user) => {
            return user.username.toLowerCase().includes(query)
        })
    }, [query, sortedUsers])

    return searchedAndSortedUsers
}

// sorts users by select (id or username)
const useSortedUsers = (users: User[], sort: keyof UserFilter | ""): User[] => {
    const sortedUsers = useMemo(() => {
        if (sort === "username") {
            return [...users].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else if(sort === "id") {
            return [...users].sort((a, b) => a.id - b.id)
        }
        return users
    }, [sort, users])

    return sortedUsers
}