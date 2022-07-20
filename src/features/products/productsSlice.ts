import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import Product from '../../assets/img/Product.png'


export type productsState = {
    id: string,
    name: string,
    type: string,
    price: number,
    standart: string,
    image: any
}

const initialState: Array<productsState> = [
    {
        id: '01',
        name: 'Опора таровая хомутовая ТХ',
        type: 'Опоры трубопроводов',
        price: 849.9,
        standart: 'ГОСТ 14911-82',
        image: Product
    },
    {
        id: '02',
        name: 'Опора корпусная приварная КП',
        type: 'Опоры трубопроводов',
        price: 849.9,
        standart: 'ГОСТ 14911-82',
        image: Product
    },
    {
        id: '03',
        name: 'Опора подвижная ОПБ1',
        type: 'Опоры трубопроводов',
        price: 849.9,
        standart: 'ГОСТ 14911-82',
        image: Product
    },
    {
        id: '04',
        name: 'Не адна буква А',
        type: 'Опоры из палок',
        price: 580,
        standart: 'ГОСТ 14911-82',
        image: Product
    },
    {
        id: '05',
        name: 'Только букво О',
        type: 'Опоры из палок',
        price: 5000,
        standart: 'ГОСТ',
        image: Product
    },
    {
        id: '06',
        name: 'Не хит',
        type: 'Опоры из палок',
        price: 2000,
        standart: 'ПРОСТ',
        image: Product
    },
    {
        id: '07',
        name: 'Товар 7',
        type: 'Скотч',
        price: 580,
        standart: 'КАК',
        image: Product
    },
    {
        id: '08',
        name: 'Товар 8',
        type: 'Скотч',
        price: 5000,
        standart: 'ТОСТ',
        image: Product
    },
    {
        id: '09',
        name: 'Товар 9',
        type: 'Скотч',
        price: 2000,
        standart: 'ГОСТ',
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

export const productsList = (state: RootState) => state.products

export default productsSlice.reducer