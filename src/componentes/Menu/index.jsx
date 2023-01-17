import React from 'react'
import styles from './Menu.module.scss'
import icones from './icones.json'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {icones.map(icone => {
                    return (
                        <li key={icone.id} className={styles.menu__item}>
                            <img src={icone.imagem} alt="" />
                            <a href="/">{icone.titulo}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
