import React from 'react'
import tag from './Tags.module.scss'

export default function Tags() {
  return (
        <div className={tag.tags}>
            <p>Filtre por tags: </p>
            <ul className={tag.tags__lista}>
                <li>Estrelas</li>
                <li>Galáxias</li>
                <li>Lua</li>
                <li>Planetas</li>
            </ul>
        </div>

    )
}
