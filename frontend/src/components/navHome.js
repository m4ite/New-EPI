import styles from "./style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
function NavHome() {
    const user = JSON.parse(sessionStorage.getItem("Usuario"))
    console.log(user)
    return (
        <>
            <div className={styles.supergraphic}></div>
            <div className={styles.line}>
                <button onClick={() => window.history.back()} className={styles.back}><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
                <div className={styles.logo}></div>
                <p>Olá, {user[0].User_Name}!</p>
            </div>
        </>
    )
}

export default NavHome