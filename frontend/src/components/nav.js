import styles from "./style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
function Nav() {
    return (
        <>
            <div className={styles.supergraphic}></div>
            <div className={styles.line}>
            <button onClick={() => window.history.back()} className={styles.back}><FontAwesomeIcon icon={faAngleLeft}/></button>
                <div className={styles.logo}></div>
                <div></div>
            </div>
        </>
    )
}

export default Nav
