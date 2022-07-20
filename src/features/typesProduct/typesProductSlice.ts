import { createSlice } from '@reduxjs/toolkit'


export type typesProductState = {
    id: string,
    name: string
}

const initialState: Array<typesProductState> = [
    {
        id: '01',
        name: 'Опоры трубопроводов'
    },
    {
        id: '02',
        name: 'Опоры из палок'
    },
    {
        id: '03',
        name: 'Скотч'
    }
]

export const typesProductSlice = createSlice({
    name: 'typesProduct',
    initialState,
    reducers: {
        addType: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addType } = typesProductSlice.actions

export default typesProductSlice.reducer