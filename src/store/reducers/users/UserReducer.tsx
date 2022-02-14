import { UserState, UserAction, UserActionTypes } from "./types"

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const UserReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.ISLOADING:
            return { ...state, loading: true }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { ...state, users: action.payload, loading: false }
        case UserActionTypes.SET_ERROR:
            return { ...state, error: action.payload, loading: false }
        case UserActionTypes.ADD_USER:
            return { ...state, users: [...state.users, action.payload] }
        default:
            return state
    }
}