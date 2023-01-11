import React from 'react'
import banner from './banner.png'
import styles from './paginaInicial.module.scss'

export const Banner = () => {
    return (
        <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
        </div>
    )
}
