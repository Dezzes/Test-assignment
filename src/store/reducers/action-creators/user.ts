import { AppDispatch } from '../../index';
import { UserActionTypes } from '../users/types';
import UserService from '../../../services/UserService';
import { NewUser } from '../../../models/User';


export const UserActionCreators = {
    fetchUsers: () => {
        return async (dispatch: AppDispatch) => {
            try {
                dispatch({type: UserActionTypes.ISLOADING})
                const response = await UserService.fetchUsers()
                dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            } catch (e) {
                dispatch({
                    type: UserActionTypes.SET_ERROR,
                    payload: "Ошибка при загрузке данных"})
            }
        }
    },
    addUser: (user: NewUser) => {
        return async (dispatch: AppDispatch) => {
            try {
                dispatch({type: UserActionTypes.ISLOADING})
                const response = await UserService.addUser(user)
                dispatch({type:UserActionTypes.ADD_USER, payload: response.data})
            } catch (e) {
                dispatch({
                    type: UserActionTypes.SET_ERROR,
                    payload: "Пользователь с таким именем уже существует"})
                    
            }
        }
    },

    setError: (payload: string) => ({type: UserActionTypes.SET_ERROR, payload}),
}

