import { Box, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import SortSelect from './SortSelect/SortSelect';
import { filterActionCreators } from '../../store/reducers/action-creators/filter';

// The component returns inputs to filter users

function UserFilter() {
    const { sort } = useTypedSelector(state => state.filter)
    const dispatch = useDispatch()

    return (
        <Box>
            <Box>
                <TextField
                    fullWidth
                    sx={{ background: "white", mt: "10px" }}
                    id="outlined-basic"
                    label="Искать по имени пользователя"
                    variant="outlined"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(filterActionCreators.filterPostsWithInput(e.target.value))}
                />
            </Box>
            <SortSelect
                value={sort}
                options={[
                    { value: "id", name: "Id" },
                    { value: "username", name: "Имени пользователя" }
                ]}
                onChange={selectedSort => dispatch(filterActionCreators.filterPostsWithSelect(selectedSort))}
            />
        </Box>
    )
}

export default UserFilter