import React from 'react'
import tag from './Tags.module.scss'
import fotos from '../Galeria/fotos.json'

export default function Tags({tags, filtrarFotos, setItens}) {
  return (
        <div className={tag.tags}>
            <p>Filtre por tags: </p>
            <ul className={tag.tags__lista}>
                {tags.map(tag =>{
                   return(
                        <li key={tag} onClick={()=> filtrarFotos(tag)} >{tag}</li>
                   )
                })}
                <li onClick={() => setItens(fotos)}>Todas</li>
            </ul>
        </div>

    )
}
