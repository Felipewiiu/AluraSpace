import React from 'react'
import open from '../../Cards/open.png'
import favorito from '../../Cards/favorito.png'

export default function ItenCard({ item, styles }) {
    return (

        <li key={item.id} className={styles.galeria__card}>
            <img
                className={styles.galeria__imagem}
                src={item.imagem}
                alt={item.titulo}
            />
            <p className={styles.galeria__descricao}>{item.titulo}</p>
            <div>
                <p>{item.creditos}</p>
                <span>
                    <img src={favorito} alt="Icone coração de curtir" />
                    <img src={open} alt="Icone de abrir modal" />
                </span>
            </div>
        </li>


    )
}
