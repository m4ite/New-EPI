import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
function NavHome() {
    return (
        <>
            <div className="supergraphic"></div>
            <div className="line">
                <a href="/"><FontAwesomeIcon icon={faArrowRightFromBracket} id="icon"/></a>
                <div className="logo"></div>
                <p>Olá, Fulano!</p>
            </div>
        </>
    )
}

export default NavHome
