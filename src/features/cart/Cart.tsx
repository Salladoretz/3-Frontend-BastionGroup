import React from 'react'
import css from './Cart.module.scss'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import OrderCard from './OrderCard'
import Basket from '../../assets/icons/Basket.png'
import Person from '../../assets/icons/Person.png'
import Phone_micro_red from '../../assets/icons/Phone_micro_red.png'
import Email_2 from '../../assets/icons/Email_2.png'
import Briefcase from '../../assets/icons/Briefcase.png'
import Cart_white from '../../assets/icons/Cart_white.png'
import List_red from '../../assets/icons/List_red.png'
import Download from '../../assets/icons/Download.png'
import { setQuantity, removeProduct, removeAllProduct } from './orderSlice'

const Cart = () => {

    const dispatch = useAppDispatch()
    const order = useAppSelector(state => state.order)

    const remove = (productId: string) => {
        dispatch(removeProduct(productId))
    }

    const change = (productId: string, price: number, quantity: number) => {
        let newQty = {
            productId: productId,
            price: price,
            quantity: quantity
        }
        dispatch(setQuantity(newQty))
    }

    const totalPrice = order.map(item => {
        return item.price * item.quantity
    }).reduce((total, product) => total + product, 0).toLocaleString()

    return (
        <div className={css.cart}>
            <div className={css.cart__header}></div>
            <div className={css.cart__main}>
                <div className={css.cart__mainLeft}>
                    <div className={css.cart__errors}></div>
                    <div>
                        {order.map(item =>
                            <OrderCard
                                key={item.productId}
                                productId={item.productId}
                                quantity={item.quantity}
                                change={change}
                                remove={remove}
                            />)}
                    </div>
                    <div className={css.cart__bottom}>
                        <button
                            onClick={() => dispatch(removeAllProduct())}>
                            <img className={css.order__basket} src={Basket} alt=''></img>
                        </button>
                        <div>Очистить корзину</div>
                    </div>
                </div>
                <div className={css.cart__mainRight}>
                    <div className={css.cart__title}>Заказ</div>
                    <div className={css.customer}>
                        <p>Контактная информация</p>
                        <div className={css.customer__inputs}>
                            <img src={Person} alt="" />
                            <input type="text" placeholder='ФИО' />
                        </div>
                        <div className={css.customer__inputs}>
                            <img src={Phone_micro_red} alt="" />
                            <input type="text" placeholder='Контактный телефон' />
                        </div>
                        <div className={css.customer__inputs}>
                            <img src={Email_2} alt="" />
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className={css.customer__inputs}>
                            <img src={Briefcase} alt="" />
                            <input type="text" placeholder='Организация / ИНН' />
                        </div>
                        <div className={css.cart__totalPrice}>
                            <div>Итого</div>
                            <div>{totalPrice} руб.</div>
                        </div>
                        <div className={css.cart__buttons}>
                            <button className={css.cart__makeOrder}>
                                <img src={Cart_white} alt="" />
                                Оформить заказ
                            </button>
                            <button className={css.cart__takeOffer}>
                                <div>
                                    <img src={List_red} alt="" />
                                </div>
                                <div>
                                    <img src={Download} alt="" />
                                </div>
                                <div>
                                    Коммерческое предложение
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart