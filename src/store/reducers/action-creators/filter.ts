import { FilterActionTypes } from "../filter/types";

export const filterActionCreators = {
    filterPostsWithSelect: (payload: string) => ({ type: FilterActionTypes.SELECT_SORT, payload }),
    filterPostsWithInput: (payload: string) => ({ type: FilterActionTypes.INPUT_SORT, payload })
}