import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import css from './OrderCard.module.scss'
import Basket from '../../assets/icons/Basket.svg'

type CardOrder = {
    productId: string,
    quantity: number
    change: (arg1: string, arg2: number, arg3: number) => any
    remove: (item: string) => any
}

const OrderCard: React.FC<CardOrder> = ({ productId, quantity, change, remove }) => {

    const products = useAppSelector(state => state.products)
    const product = products.find(item => item.id === productId)

    const [counter, setCounter] = useState(quantity)

    const setQty = (qty: number) => {
        change(productId, Number(product?.price), counter + qty)
        setCounter(counter + qty)
    }

    const summ = Number(product?.price) * counter

    return (
        <div className={css.order}>
            <img className={css.order__image} src={product?.image} alt="" />
            <div className={css.order__info}>
                <div className={css.order__infoStandart}>{product?.standart}</div>
                <div className={css.order__infoOrder}>{product?.name}</div>
                <div className={css.order__infoPrice}>{product?.price.toLocaleString()} руб.</div>
            </div>
            <div className={css.order__quantity}>
                <div className={css.order__qty}>
                    <button
                        onClick={() => setQty(1)}
                    >+</button>
                    <div className={css.order__infoCounter}>
                        <input
                            type="number"
                            value={counter}
                            onChange={event => setQty(+event.target.value)}
                        />
                    </div>

                    <button
                        onClick={() => counter > 0 ? setQty(-1) : ''}
                    >-</button>
                </div>
                <div className={css.order__total}>{summ.toLocaleString()} руб.</div>
                <button
                    onClick={() => remove(productId)}
                >
                    <img className={css.order__basket} src={Basket} alt=''></img>
                </button>
            </div>

        </div>
    )
}

export default OrderCard