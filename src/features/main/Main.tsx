import React from 'react'
import css from './Main.module.scss'
import Arrow from '../../assets/icons/Arrow.png'
import Select from '../../assets/icons/Select.png'
import Apps_micro from '../../assets/icons/Apps.png'
import List from '../../assets/icons/List.png'

const Main = () => {
    return (
        <div className={css.main}>
            <div className={css.main__top}>
                <div className={css.main__topPath}>
                    <p>Главная /</p>
                    <p>Интернет-магазин /</p>
                    <p>Опоры трубопроводов</p>
                </div>
                <div className={css.main__topLine}>
                    <div className={css.main__topLineLeft}>
                        <button>
                            <img src={Arrow} alt="" />
                        </button>
                        <p>Опоры трубопроводов</p>
                    </div>
                    <div className={css.main__topLineRight}>
                        <p>Сначала популярные</p>
                        <button>
                            <img src={Select} alt="" />
                        </button>
                        <button>
                            <img src={Apps_micro} alt="" />
                        </button>
                        <button>
                            <img src={List} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={css.main__middle}></div>
            <div></div>
        </div>
    )
}

export default Main