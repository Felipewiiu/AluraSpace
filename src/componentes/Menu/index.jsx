import React from 'react'
import styles from './Menu.module.scss'
import icones from './icones.json'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {icones.map(icone => {
                    return (
                        <li className={styles.menu__item}>
                            <img src={icone.imagem} alt="" />
                            <a href="/">Início</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
