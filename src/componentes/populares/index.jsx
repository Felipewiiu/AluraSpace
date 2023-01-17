import React from 'react'
import styles from './populares.module.scss'
import fotosPopulares from './fotos-populares.json'
import Botao from 'componentes/Botao'

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
            {fotosPopulares.map(foto =>{
                return(
                    <li key={foto.id}>
                        <img src={foto.path} alt={foto.alt} />
                    </li>
                )
            })}

        </ul>
        <Botao nome={"Ver mais Fotos"}/>
        
    </aside>
  )
}
