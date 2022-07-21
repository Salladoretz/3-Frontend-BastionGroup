import React from 'react'
import css from './Footer.module.scss'
import Logo_black from '../../assets/img/Logo_black.png'
import Copyright from '../../assets/icons/Copyright.png'
import Phone_white from '../../assets/icons/Phone_white.svg'
import Telegramm from '../../assets/icons/Telegramm.svg'
import VK from '../../assets/icons/VK.svg'

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.footer__above}>
                <div className={css.footer__aboveContainer}>
                    <input className={css.footer__aboveInput} type="text" placeholder='Ваше имя' />
                    <input className={css.footer__aboveInput} type="text" placeholder='Ваш телефон' />
                    <div className={css.footer__aboveButton}>
                        <button className={css.footer__callbackButton}>Заказать звонок</button>
                        <p>Нажимая на кнопку вы соглашаетесь с политикой конфиденциальности</p>
                    </div>
                </div>
            </div>
            <div className={css.footer__main}>
                <div className={css.footer__mainTop}>
                    <img src={Logo_black} alt='' />
                    <div>
                        <p>Металлоконструкции</p>
                        <p>Порошковая покраска</p>
                    </div>
                    <div>
                        <p>Фасадные конструкции</p>
                        <p>Светопрозрачные конструкции</p>
                    </div>
                    <div className={css.footer__contacts}>
                        <p>+7(499)380-78-90</p>
                        <p>info@bastion.pro</p>
                    </div>
                </div>
                <div className={css.footer__mainMiddle}>
                    <div className={css.footer__copyright}>
                        <img src={Copyright} alt='' />
                        <p>2020 Все права защищены | Политика конфиденциальности</p>
                    </div>
                    <div className={css.footer__smm}>
                        <button className={css.footer__smmButton}>
                            <img src={Phone_white} alt="" />
                        </button>
                        <button className={css.footer__smmButton}>
                            <img src={Telegramm} alt="" />
                        </button>
                        <button className={css.footer__smmButton}>
                            <img src={VK} alt="" />
                        </button>
                        <button className={css.footer__smmButtonBanned}></button>
                        <button className={css.footer__smmButtonBanned}></button>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Footer