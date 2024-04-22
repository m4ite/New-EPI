import NavHome from "../../components/navHome"
import Footer from "../../components/footer"
import Select from 'react-select'

import styles from "./style.module.css"

import { useNavigate } from "react-router-dom";


function Uniforme() {

    const Navigate = useNavigate();

    const options = [
        { value: 'Camisa manga longa M', label: 'Camisa manga longa M' },
        { value: 'Camisa manga longa P', label: 'Camisa manga longa P' },
        { value: 'Camisa manga longa G', label: 'Camisa manga longa G' }
    ]

    return (
        <>
            <NavHome />
            <button onClick={() => Navigate("/historicoSolicitacoes")} className={styles.link}>Ver minhas solicitações</button>
            <div className={styles.square}>
                <p className={styles.t}>Digite o uniforme desejado</p>

                <div className={styles.select}>
                    <Select options={options} />
                </div>

                <a className={styles.button} href="/">Solicitar</a>

            </div>
            <Footer />
        </>
    )
}

export default Uniforme