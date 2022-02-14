export interface User {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    is_active: boolean,
    last_login: string,
    is_superuser: boolean
}

export interface NewUser {
    username: string,
    first_name: string,
    last_name: string,
    password: string
    is_active: boolean
}