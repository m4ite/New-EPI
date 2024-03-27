import Nav from "../../components/nav"
import Footer from "../../components/footer"
import styles from "./style.module.css"
import map from "./map.png"

function Map(){
    return(
        <>
        <Nav/>
            <div className={styles.t}>Distribuição de máquinas na planta</div>
            <img src={map} className={styles.map}></img>

        <Footer/>
        </>
    )
}

export default Map
