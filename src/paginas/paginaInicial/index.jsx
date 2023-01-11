import {Banner}  from "../../componentes/Banner";
import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/Menu";
import styles from '../../componentes/Banner/paginaInicial.module.scss'




export default function PaginaInicial(){
    return(
        <>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                    <Menu />
                   <Banner/>
                </section>

            </main>
        
        </>
    )
}