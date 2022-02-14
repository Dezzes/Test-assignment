import AuthService from '../../../services/AuthService';
import { AuthActionTypes, SetAuthAction, SetIsLoadingAction, SetErrorAction, SetUsernameAction } from '../auth/types';
import { AppDispatch } from '../../index';

export const AuthActionCreators = {
    login: (username: string, passsword: string) => {
        return async (dispatch: AppDispatch) => {
            try {
                dispatch(AuthActionCreators.setIsLoading(true))
                const response = await AuthService.login(username, passsword)
                localStorage.setItem('Token', response.data.token)
                dispatch(AuthActionCreators.setIsAuth(true))
                dispatch(AuthActionCreators.setUsername(username))
                dispatch(AuthActionCreators.setIsLoading(false))
            } catch (e) {
                dispatch(AuthActionCreators.setError('Неверный логин или пароль'))
            }
        }
    },

    logout: () => {
        return (dispatch: AppDispatch) => {
            localStorage.removeItem('Token')
            dispatch(AuthActionCreators.setIsAuth(false))
        }
    },
    
    setUsername: (payload: string): SetUsernameAction => ({type:AuthActionTypes.SET_USERNAME, payload}),
    setIsAuth: (payload: boolean): SetAuthAction => ({type:AuthActionTypes.SET_AUTH, payload}),
    setError: (payload: string): SetErrorAction => ({type:AuthActionTypes.SET_ERROR, payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type:AuthActionTypes.SET_IS_LOADING, payload}),
}


