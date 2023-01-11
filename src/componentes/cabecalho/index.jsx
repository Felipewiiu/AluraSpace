import logo from './logo.png'
import search from './search.png'
import style from './cabecalho.module.scss'

export default function Cabecalho(){
    return(
        <header className={style.cabecalho}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={style.cabecalho__container}>
                <input className={style.cabecalho__input} placeholder="O que você procura?" type="text" />
                <img src={search} alt="Ícone de lupa" />
            </div>

            
        </header>
    )
}