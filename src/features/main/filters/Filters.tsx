import React from 'react'
import css from './Filters.module.scss'
import Options from '../../../assets/icons/Options.png'
import Help from '../../../assets/icons/Help.png'
import Shevron_down from '../../../assets/icons/Shevron_down.png'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setFilterType } from './filtersSlice'
//import { Slider } from 'antd'
//import 'antd/dist/antd.css'


const Filters = () => {


    const typesProduct = useAppSelector(state => state.typesProduct)
    const filters = useAppSelector(state => state.filters)
    const dispatch = useAppDispatch()

    //const onChange = (value: number | [number, number]) => {
    //    console.log('onChange: ', value)}

    return (
        <div className={css.filters}>
            <div className={css.filters__title}>
                <img src={Options} alt="" />
                <p>Фильтры</p>
            </div>
            <div className={css.filters__price}>
                <div className={css.filters__titles}>
                    <p>Цена, руб.</p>
                </div>
                <div className={css.filters__priceInputs}>
                    <div className={css.filters__priceInput}>
                        <p>от</p>
                        <input type="number" placeholder='100' />
                    </div>
                    <div className={css.filters__priceInput}>
                        <p>до</p>
                        <input type="number" placeholder='300' />
                    </div>
                </div>
                <div className={css.filters__priceRange}>
                    {/*<Slider range defaultValue={[20, 50]} onChange={onChange} />*/}
                </div>
            </div>
            <div className={css.filters__type}>
                <div className={css.filters__typeHeader}>
                    <p className={css.filters__titles}>Тип продукта</p>
                    <img src={Help} alt="" />
                    <div className={css.filters__typeImg}>
                        <img src={Shevron_down} alt="" />
                    </div>
                </div>
                <div className={css.filters__typeContent}>
                    {typesProduct.map(item =>
                        <button
                            key={item.id}
                            className={css.filters__typeItem}
                            onClick={() => dispatch(setFilterType(item.id))}
                        >{item.name}</button>)}
                </div>
                <div>{filters.filterType}</div>
            </div>
        </div>
    )
}

export default Filters