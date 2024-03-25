import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
function NavHome() {
    const user = JSON.parse(sessionStorage.getItem("Usuario"))
    return (
        <>
            <div className="supergraphic"></div>
            <div className="line">
                <a href="/"><FontAwesomeIcon icon={faArrowRightFromBracket} id="icon"/></a>
                <div className="logo"></div>
                <p>Olá, {user[0].User_Name}!</p>
            </div>
        </>
    )
}

export default NavHome