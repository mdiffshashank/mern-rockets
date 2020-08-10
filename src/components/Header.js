import React from 'react'
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.header}>
            <h3 className={style.h3}>SpaceX Launch Programs</h3>
        </div>
    )
}

export default Header
