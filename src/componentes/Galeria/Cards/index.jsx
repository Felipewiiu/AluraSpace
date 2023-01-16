import React from 'react'
import ItenCard from './itenCard'

export default function Cards({itens, styles}) {
    return (
        <ul className={styles.galeria__cards}>
            {itens.map(iten =>{
               return(
                <ItenCard key={iten.id} item={iten} styles={styles} /> //pode passar como props o parametro da função map
               )

            })}
         
        </ul>
    )
}
