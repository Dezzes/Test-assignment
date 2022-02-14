export interface UserFilter {
  id: string,
  username: string
} 

export interface FilterState {
    sort: keyof UserFilter | "",
    query: string
}

export enum FilterActionTypes {
    SELECT_SORT = "SELECT_SORT",
    INPUT_SORT = "INPUT_SORT"
}

interface SelectSortAction {
    type: FilterActionTypes.SELECT_SORT,
    payload: ""
}

interface InputSortAction {
    type: FilterActionTypes.INPUT_SORT,
    payload: ""
}

export type FilterAction = SelectSortAction | InputSortAction