import { createSlice } from '@reduxjs/toolkit'


export type orderState = {
    productId: string,
    quantity: number
}

const initialState: Array<orderState> = [
    {
        productId: '01',
        quantity: 2
    },
    {
        productId: '02',
        quantity: 2
    }
]


export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setQuantity: (state, action) => {
            let index = state.findIndex(el => el.productId === action.payload.productId)
            state[index].quantity = action.payload.quantity
        },
        removeProduct: (state, action) => {
            let del = state.findIndex(el => el.productId === action.payload)
            state.splice(del, 1)
        },
        removeAllProduct: (state) => {
            state.splice(0, state.length)
        }
    }
})

export const { setQuantity, removeProduct, removeAllProduct } = orderSlice.actions

export default orderSlice.reducer