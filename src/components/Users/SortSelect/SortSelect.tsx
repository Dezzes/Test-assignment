import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React from 'react'
import styles from "./SortSelect.module.css"

interface Options {
    name: string,
    value: string
}

interface Props {
    options: Options[],
    value: string,
    onChange: (e: string) => void
}

const SortSelect: React.FC<Props> = ({ value, options, onChange }) => {
    return (
        <FormControl className={styles.FormControlStyle}>
            <InputLabel id="simple-select-label">Сортировать по</InputLabel>
            <Select
                labelId="simple-select-label"
                id="simple-select"
                value={value}
                label="Сортировать по"
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SortSelect