import Nav from "../../components/nav"
import Footer from "../../components/footer"
import styles from "./style.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function Map() {
    return (
        <>
            <Nav className={styles.screen}/>

            <div className={styles.t}>Distribuição de máquinas na planta</div>
            
            <div className={styles.mapa}>
                <button className={styles.barracao210}>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    <div className={styles.location}>CT210</div>
                </button>

                <button className={styles.barracao201}>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    <div className={styles.location}>CT201</div>
                </button>
                <button className={styles.barracao401}>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    <div className={styles.location}>CT401</div>
                </button>

                <button className={styles.barracao303}>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    <div className={styles.location}>CT303</div>
                </button>

                <button className={styles.barracao101}>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    <div className={styles.location}>CT101</div>
                </button>
            </div> 

            <Footer />
        </>
    )
}

export default Map
