import React from 'react'
import styles from '../populares/populares.module.scss'

export default function Botao({nome}) {
  return (
    <button className={styles.button}>{nome}</button>
  )
}
