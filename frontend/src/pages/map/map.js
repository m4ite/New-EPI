import Nav from "../../components/nav"
import Footer from "../../components/footer"
import "./style.css"
import map from "./map.png"

function Map(){
    return(
        <>
        <Nav/>
            <div className="t">Distribuição de máquinas na planta</div>
            <img src={map} className="map"></img>

        <Footer/>
        </>
    )
}

export default Map
