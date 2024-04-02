import styles from "./style.module.css"

import NavHome from "../../components/navHome"
import Footer from "../../components/footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faMagnifyingGlass, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <>
            <NavHome />
            <div className={styles.buttons}>
                <a href="Map" className={styles.button}>
                    <FontAwesomeIcon icon={faMapLocationDot}/>
                    <p>Mapa</p>
                </a>

                <a href="Search" className={styles.button}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <p>Buscar EPI</p>
                </a>


                <a href="Removes" className={styles.button}>
                    <FontAwesomeIcon icon={faClockRotateLeft}/>
                    <p>Retiradas</p>
                </a>
            </div>

            <Footer />
        </>
    )
}

export default Home
