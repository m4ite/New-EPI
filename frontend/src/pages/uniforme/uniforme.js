import NavHome from "../../components/navHome"
import Footer from "../../components/footer"
import Select from 'react-select'

import styles from "./style.module.css"

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function Uniforme() {

    const Navigate = useNavigate();
    const [options, setOptions] = useState([]);
    const [uniform, setUniform] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8080/uniform`)
        .then((res) => setOptions(res.data.map(obj => ({ value: obj.ID, label: obj.Uniform_name}))))
        .catch((err) => console.log(err))
    }, [])

    function requestUniform(a){
        const user = JSON.parse(sessionStorage.getItem("Usuario"))

        const request = {
            Uniform : a,
            User : user[0].ID
        }

        const req = axios.post(`http://localhost:8080/request`, request)

        console.log(req)
    }

    return (
        <>
            <NavHome />
            <button onClick={() => Navigate("/historicoSolicitacoes")} className={styles.link}>Ver minhas solicitações</button>
            <div className={styles.square}>
                <p className={styles.t}>Digite o uniforme desejado</p>

                <div className={styles.select}>
                    <Select options={options} onChange={(choice) => setUniform(choice.value)}/>
                </div>

                <a className={styles.button} onClick={() => requestUniform(uniform)}>Solicitar</a>
            </div>
            <Footer />
        </>
    )
}

export default Uniforme