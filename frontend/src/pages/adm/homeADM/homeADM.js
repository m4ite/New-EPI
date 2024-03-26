import NavHome from "../../../components/navHome"
import Footer from "../../../components/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import "./style.css"

import Maquina from "./maquina.png"
import Estoque from "./estoque.png"

function HomeADM() {
    return (
        <>
            <NavHome />
            <div className="buttons">
                <a href="ListagemEPI" className="button">
                    <FontAwesomeIcon icon={faHelmetSafety} />
                    <p>EPI</p>
                </a>

                <a href="ListagemMaquina" className="button">
                    <img src={Maquina}></img>
                    <p>Máquina</p>
                </a>


                <a href="Removes" className="button">
                    <img src={Estoque}></img>
                    <p>Estoque</p>
                </a>
            </div>

            <Footer />
        </>
    )
}

export default HomeADM
