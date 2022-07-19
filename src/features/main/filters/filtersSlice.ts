import { createSlice } from '@reduxjs/toolkit'


export type filterstState = {
    filterType: string,
    filterMinPrice: number,
    filterMaxPrice: number,
    filterStandart: string[]
}

const initialState: filterstState =
{
    filterType: '',
    filterMinPrice: 0,
    filterMaxPrice: 0,
    filterStandart: ['']
}


export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilterType: (state, action) => {
            state.filterType = action.payload
        }
    }
})

export const { setFilterType } = filtersSlice.actions

export default filtersSlice.reducer