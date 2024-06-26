import styles from "./style.module.css"

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import { Form, Input } from 'rsuite';
import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";


import newEPI from "./newEPI.jpg"

function NewEPI() {
    const [EpiName, setName] = useState()
    const [EpiDays, setDays] = useState()

    const navigate = useNavigate()

    async function AddEPI(){
        const epi = {
            Epi_Name:EpiName,
            Days_time:EpiDays
        }
        
        const response = await axios.post('http://localhost:8080/epis', epi)

        if(response.status == 200){
            navigate("/ListagemEPI")
        }

    }

    return (
        <>
            <Nav />
            <p className={styles.t}>Cadastrar EPI</p>
            <div className={styles.all}>
                <Form>
                    <Form.Group controlId="name">
                        <Form.ControlLabel>Nome</Form.ControlLabel>
                        <Form.Control onChange={(value) => setName(value)} name="name" />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.ControlLabel>Prazo para retirada <span style={{fontSize:"15px"}}>(dias)</span></Form.ControlLabel>
                        <Form.Control onChange={(value) => setDays(value)} name="email" type="number" />
                    </Form.Group>
                    <button onClick={() => AddEPI()} className={styles.cadastrar}>Cadastrar</button>
                </Form>

                <img src={newEPI}></img>
            </div>

            <Footer />

        </>
    )
}

export default NewEPI
