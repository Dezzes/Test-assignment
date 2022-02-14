import { FilterAction, FilterActionTypes, FilterState } from './types';

const initialState: FilterState = {
    sort: "",
    query: ""
}

export const FilterReducer = (state = initialState, action: FilterAction): FilterState => {
    switch(action.type) {
        case FilterActionTypes.SELECT_SORT:
            return {...state, sort: action.payload}
        case FilterActionTypes.INPUT_SORT:
            return {...state, query: action.payload}
        default:
            return state
    }
}