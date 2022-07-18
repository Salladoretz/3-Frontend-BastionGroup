import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import Standart from './Standart'
import css from './StandartsList.module.scss'

const StandartsList = () => {

    const products = useAppSelector(state => state.products)
    const standarts = Array.from(new Set(products.map(item => item.standart)))

    let chosen: string[] = []

    const addFilterStandart = (item: string) => {
        if (chosen.includes(item)) {
            //let arr = chosen.filter(el => { return el !== item })
            let del = chosen.findIndex(el => el === item)
            chosen.splice(del, 1)
        } else {
            chosen.push(item)
        }
        console.log('chosen', chosen)
    }



    return (
        <div className={css.standarts}>
            {standarts.map(item =>
                <Standart
                    key={item}
                    name={item}
                    addFilterStandart={addFilterStandart}
                    chosen={chosen}
                />)}

        </div >
    )
}

export default StandartsList