import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
function Nav() {
    return (
        <>
            <div className="supergraphic"></div>
            <div className="line">
            <a href="/Home"><FontAwesomeIcon icon={faAngleLeft} id="icon"/></a>
                <div className="logo"></div>
                <div></div>
            </div>
        </>
    )
}

export default Nav
