import { Banner } from "../../componentes/Banner";
import styles from '../../componentes/Banner/paginaInicial.module.scss'

import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/Menu";
import Galeria from "../../componentes/Galeria";
import Populares from "../../componentes/populares";




export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>

            </main >


        </>
    )
}