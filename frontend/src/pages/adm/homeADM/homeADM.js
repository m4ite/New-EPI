import styles from "./style.module.css"

import NavHome from "../../../components/navHome"
import Footer from "../../../components/footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';

import Maquina from "./maquina.png"

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
                    <img src={Maquina} className={styles.image}/>
                    <p>Máquina</p>
                </a>
            </div>

            <Footer />
        </>
    )
}

export default HomeADM
