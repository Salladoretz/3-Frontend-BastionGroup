import React from 'react'
import css from './Header.module.scss'
import Phone from '../../assets/icons/Phone.svg'
import Point from '../../assets/icons/Point.svg'
import ShevronDown_red from '../../assets/icons/ShevronDown_red.svg'
import Email from '../../assets/icons/Email.svg'
import Logo from '../../assets/img/Logo.png'
import Apps from '../../assets/icons/Apps.svg'
import Search from '../../assets/icons/Search.svg'
import Enter from '../../assets/icons/Enter.svg'
import Star from '../../assets/icons/Star.svg'
import CartSVG from '../../assets/icons/Cart.svg'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'

const Header = () => {

    const order = useAppSelector(state => state.order)

    return (
        <div className={css.header}>
            <div className={css.header__top}>
                <div className={css.header__menu}>
                    <Link to='3-Frontend-BastionGroup/types'>
                        <p>Типы продуктов</p>
                    </Link>
                    <Link to='3-Frontend-BastionGroup/products'>
                        <p>Продукты</p>
                    </Link>
                    <p>Выгоды для вас</p>
                    <p>Гарантии</p>
                    <p>Контакты</p>
                </div>
                <div className={css.header__contacts}>
                    <div className={css.header__contactsPhone}>
                        <img src={Phone} alt='' />
                        <p>+7 (499) 380-78-90</p>
                    </div>
                    <div className={css.header__contactsPlace}>
                        <img src={Point} alt='' />
                        <p>Москва</p>
                        <img src={ShevronDown_red} alt='' />
                    </div>
                    <div className={css.header__contactsMail}>
                        <img src={Email} alt='' />
                        <p><a href='mailto:info@bastion.pro' >info@bastion.pro</a></p>
                    </div>
                </div>
            </div>
            <div className={css.header__bottom}>
                <div className={css.header__bottomContainer}>
                    <Link to='3-Frontend-BastionGroup'>
                        <img className={css.header__logo} src={Logo} alt='' />
                    </Link>
                    <div className={css.header__brand}>
                        <p>Производитель металлических изделий №1</p>
                    </div>
                    <Link to='3-Frontend-BastionGroup'>
                        <button className={css.header__catalog}>
                            <img src={Apps} alt='' />
                            <p>Каталог</p>
                        </button>
                    </Link>
                    <div className={css.header__search}>
                        <img src={Search} alt='' />
                        <input type="text" placeholder='Поиск по названию...' />
                        <img src={Enter} alt='' />
                    </div>
                    <div className={css.header__favorites}>
                        <button>
                            <img src={Star} alt='' className={css.header__favoritesIcon} />
                        </button>
                        Избранное
                    </div>
                    <div className={css.header__cart}>
                        <Link to='3-Frontend-BastionGroup/cart'>
                            <div className={css.header__cartLink}>
                                <img src={CartSVG} alt='' className={css.header__cartIcon} />
                            </div>
                            Корзина
                        </Link>
                        <div
                            className={order.length > 0
                                ? css.header__cartCounter
                                : css.header__cartCounterHide}
                        >{order.length}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header