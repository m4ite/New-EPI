import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
function Nav() {
    return (
        <>
            <div className="supergraphic"></div>
            <div className="line">
                <FontAwesomeIcon icon={faArrowRightFromBracket} id="icon"/>
                <div className="logo"></div>
                <p>Olá, Fulano!</p>
            </div>
        </>
    )
}

export default Nav
