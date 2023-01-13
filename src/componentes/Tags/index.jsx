import React from 'react'
import tag from './Tags.module.scss'

export default function Tags() {
  return (
        <div className={tag.tags}>
            <p>Filtre por tags: </p>
            <ul>
                <li className={tag.tags__lista}>Estrelas</li>
                <li className={tag.tags__lista}>Galáxias</li>
                <li className={tag.tags__lista}>Lua</li>
                <li className={tag.tags__lista}>Planetas</li>
            </ul>
        </div>

    )
}
