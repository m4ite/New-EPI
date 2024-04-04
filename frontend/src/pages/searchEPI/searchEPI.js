import styles from "./style.module.css"
import Nav from "../../components/nav"
import Footer from "../../components/footer"
import { useEffect, useState } from "react";
import Select from 'react-select'
import axios from "axios"
import { useNavigate } from "react-router-dom";


function SearchEPI() {
    const [epis, setEpis] = useState([
        {
            value: "", label: ""
        }
    ])
    const [epiSearch, setEpiSearch] = useState()

    async function CallEpis() {
        try {
            const response = await axios.get('http://localhost:8080/epis');
            setEpis(response.data.map(obj => ({ value: obj.ID, label: obj.EPI_Name})))
        } catch (error) {
            console.error(error.message);
        }
    }
    
    useEffect(() => {
        CallEpis()
    }, [])

    return (
        <>
            <Nav />
            <div className={styles.square}>
                <p className={styles.t}>Digite o EPI desejado</p>

                <div className={styles.select}>
                    <Select options={epis} onChange={(e) => setEpiSearch(e.value) }/>
                </div>
                <a className={styles.button}>Buscar</a>
            </div>


            <Footer />
        </>
    )
}

export default SearchEPI