import React, { useState } from 'react'
import css from './Card.module.scss'
import Cart_red from '../../../assets/icons/Cart_red.png'
import { productsState } from '../../products/productsSlice'


interface CardProduct {
    product: productsState
}

const Card: React.FC<CardProduct> = ({ product }) => {

    const [counter, setCounter] = useState(0)

    return (
        <div className={css.card}>
            <div className={css.fake}>
                <div className={css.card__marketing}>
                    {product.name.includes('о')
                        ? <div className={css.card__marketingHit}>Хит</div>
                        : ''}
                    <div className={css.card__marketingDiscount}>Скидка</div>
                    {product.name.includes('а')
                        ? <div className={css.card__marketingSale}>Акция</div>
                        : ''}

                </div>
                <div className={css.card__photo}>
                    <img src={product.image} alt="" />
                </div>
                <div className={css.card__info}>
                    <div className={css.card__infoStandart}>{product.standart}</div>
                    <p>{product.name}</p>
                    <div className={css.card__infoOrder}>
                        <div className={css.card__infoPrice}>
                            <p>{product.price} руб.</p>
                        </div>
                        <div className={css.card__infoQty}>
                            <button
                                onClick={() => setCounter(counter + 1)}
                            >+</button>
                            <div className={css.card__infoCounter}>{counter}</div>
                            <button
                                onClick={() => counter > 0 ? setCounter(counter - 1) : ''}
                            >-</button>
                        </div>
                    </div>
                </div>
                <div className={css.card__buttons}>
                    <button className={css.card__buttonCart}>
                        <img src={Cart_red} alt="" />
                        <p>В корзину</p>
                    </button>
                    <button className={css.card__buttonDetails}>Подробнее</button>
                </div>
            </div >
        </div >
    )
}

export default Card