import NavHome from "../../components/navHome"
import Footer from "../../components/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faMagnifyingGlass, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import "./style.css"

function Home() {
    return (
        <>
            <NavHome />
            <div className="buttons">
                <a href="Map" className="button">
                    <FontAwesomeIcon icon={faMapLocationDot}/>
                    <p>Mapa</p>
                </a>

                <a href="Search" className="button">
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <p>Buscar EPI</p>
                </a>


                <a href="Removes" className="button">
                    <FontAwesomeIcon icon={faClockRotateLeft}/>
                    <p>Retiradas</p>
                </a>
            </div>

            <Footer />
        </>
    )
}

export default Home
