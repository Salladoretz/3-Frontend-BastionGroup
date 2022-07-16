import { createSlice } from '@reduxjs/toolkit'
import Product from '../../assets/img/Product.png'


export type productsState = {
    id: string,
    name: string,
    type: string,
    price: number,
    standart: string,
    image: object
}

const initialState: Array<productsState> = [
    {
        id: '01',
        name: 'Wall 01',
        type: 'Wall',
        price: 100,
        standart: 'ГОСТ',
        image: Product
    },
    {
        id: '02',
        name: 'Ball 01',
        type: 'Ball',
        price: 200,
        standart: 'СНИП',
        image: Product
    }
]

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addProduct } = productsSlice.actions

export default productsSlice.reducer