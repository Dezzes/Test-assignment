import { User } from '../../../models/User';
import { AuthAction, AuthState, AuthActionTypes } from './types';

const initialState: AuthState = {
    isAuth: false,
    error: "",
    isLoading: false,
    username: "",
}

export const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionTypes.SET_USERNAME:
            return {...state, username: action.payload}
        case AuthActionTypes.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case AuthActionTypes.SET_IS_LOADING:
            return {...state, isLoading: action.payload}        
        default:
            return state
    }
}