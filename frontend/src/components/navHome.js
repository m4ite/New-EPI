import styles from "./style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
function NavHome() {
    return (
        <>
            <div className={styles.supergraphic}></div>
            <div className={styles.line}>
                <button onClick={() => window.history.back()} className={styles.back}><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
                <div className={styles.logo}></div>
                <p>Olá, Fulano!</p>
            </div>
        </>
    )
}

export default NavHome
