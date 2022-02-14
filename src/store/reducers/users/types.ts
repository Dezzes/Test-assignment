import { User } from '../../../models/User';
export interface UserState {
    users: User[],
    loading: boolean,
    error: null | string
}

export enum UserActionTypes {
    ISLOADING = "ISLOADING",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    SET_ERROR = "SET_ERROR",
    ADD_USER = "ADD_USER",
}

interface IsLoadingAction {
    type: UserActionTypes.ISLOADING
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: User[]
}

interface ErrorAction {
    type: UserActionTypes.SET_ERROR,
    payload: string
}

interface AddUser {
    type: UserActionTypes.ADD_USER,
    payload: User
}

export type UserAction = IsLoadingAction | FetchUsersSuccessAction | ErrorAction | AddUser