import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import Select from 'react-select'

import styles from "./style.module.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function BuscarEPI() {
    const [id, setid] = useState()
    const [options, setOptions] = useState([
        {
            value: "",
            label: ""
        }
    ])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8080/episAll`)
        .then((res) => {setOptions(res.data)})
        .catch((er) => console.error(er.message))
    }, [])

    console.log(options)

    return (
        <>
            <Nav />

            <div className={styles.square}>
                <p className={styles.t}>Digite o EPI desejado</p>

                <div className={styles.select}>
                    <Select options={options} onChange={(e) => setid(e.value) }/>
                </div>

                <a className={styles.button} onClick={() => navigate(`/ListagemEPI/${id}`)}>Buscar</a>

            </div>

            <Footer />
        </>
    )
}

export default BuscarEPI