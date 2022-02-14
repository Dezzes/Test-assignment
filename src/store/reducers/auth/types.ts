
export interface AuthState {
    isAuth: boolean,
    username: string,
    isLoading: boolean,
    error: string
}

export enum AuthActionTypes {
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_USERNAME = "SET_USERNAME",
    SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetAuthAction {
    type: AuthActionTypes.SET_AUTH,
    payload: boolean
}

export interface SetErrorAction {
    type: AuthActionTypes.SET_ERROR,
    payload: string
}

export interface SetUsernameAction {
    type: AuthActionTypes.SET_USERNAME,
    payload: string
}

export interface SetIsLoadingAction {
    type: AuthActionTypes.SET_IS_LOADING,
    payload: boolean
}

export type AuthAction =
    SetAuthAction |
    SetUsernameAction |
    SetErrorAction |
    SetIsLoadingAction