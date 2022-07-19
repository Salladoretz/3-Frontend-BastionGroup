import React, { useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { productsList } from '../../products/productsSlice'
import css from './Cards.module.scss'
import Card from './Card'

const Cards = () => {

    const products = useAppSelector(productsList)

    return (
        <div className={css.cards}>
            {products.map(item =>
                <Card
                    key={item.id}
                    product={item}
                />
            )}
        </div>
    )
}

export default Cards