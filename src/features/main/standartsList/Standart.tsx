import React, { useState } from 'react'
import css from './Standart.module.scss'

interface ButtonStandart {
    name: string,
    chosen: string[]
    addFilterStandart: (item: string) => void
}

const Standart: React.FC<ButtonStandart> = ({ name, chosen, addFilterStandart }) => {

    const [selected, setSelected] = useState(false)

    const drop = () => {
        addFilterStandart(name)
        if (chosen.includes(name)) {
            setSelected(true)
        } else {
            setSelected(false)
        }

    }

    return (
        <button
            className={selected
                ? css.standart__button_active
                : ''}
            onClick={() => drop()}
        >{name}</button>
    )
}

export default Standart