import { combineReducers } from "redux";
import { AuthReducer } from "./auth/AuthReducer";
import { UserReducer } from './users/UserReducer';
import { FilterReducer } from './filter/FilterReducer';

export const rootReducer = combineReducers({
    auth: AuthReducer,
    users: UserReducer,
    filter: FilterReducer,
})