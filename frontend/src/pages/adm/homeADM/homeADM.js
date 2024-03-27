import styles from "./style.module.css"

import NavHome from "../../../components/navHome"
import Footer from "../../../components/footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';

import Maquina from "./maquina.png"
import Estoque from "./estoque.png"

function HomeADM() {
    return (
        <>
            <NavHome />
            <div className={styles.buttons}>
                <a href="ListagemEPI" className={styles.button}>
                    <FontAwesomeIcon icon={faHelmetSafety} />
                    <p>EPI</p>
                </a>

                <a href="ListagemMaquina" className={styles.button}>
                    <img src={Maquina}></img>
                    <p>Máquina</p>
                </a>


                <a href="Removes" className={styles.button}>
                    <img src={Estoque}></img>
                    <p>Estoque</p>
                </a>
            </div>

            <Footer />
        </>
    )
}

export default HomeADM
