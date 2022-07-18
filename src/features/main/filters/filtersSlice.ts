import { createSlice } from '@reduxjs/toolkit'


export type filterstState = {
    filterType: string,
    minPrice: number,
    maxPrice: number,
    filterStandart: string[]
}

const initialState: filterstState =
{
    filterType: '',
    minPrice: 0,
    maxPrice: 0,
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