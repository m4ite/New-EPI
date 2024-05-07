import styles from "./style.module.css"
import { useState, useEffect } from 'react';

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import { Form, TagPicker, Modal, Button, Message } from 'rsuite'
import Select from 'react-select'
import axios from "axios"
function NewMaquina() {
    const [epi, setEpi] = useState([])
    const [shed, setShed] = useState([])
    const [open, setOpen] = useState(false);
    const [insertShed, setInsert] = useState([])
    const [epiList, setList] = useState([])
    const [epiQtt, setQtt] = useState({
        epiId : [],
        qtt : [],
        shedId : ''
    })
    const handleOpen = () => setOpen(true);

    const handleSelect = (value) => {
        var epis = []
        epi.forEach(ele => {
            if (value.includes(ele.ID)) {
                epis.push(ele)
            }
        });
        setList(epis);
    };

    function handleClose() {
        axios.post(`http://localhost:8080/machineEpi/:${insertShed}/:${epiList}`)
        setOpen(false)
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/epis`)
            .then((res) => { setEpi(res.data) })
            .catch((er) => console.error(er.message))
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8080/sheds`)
            .then((res) => { setShed(res.data) })
            .catch((er) => console.error(er.message))
    }, [])

    function showError(message) {
        return <Message showIcon type="error" closable className={styles.alert}>
            <strong>Error!</strong> {message}
        </Message>
    }

    function showSuccess(message) {
        return <Message showIcon type="success" closable className={styles.alert}>
            <strong>Success!</strong> {message}
        </Message>
    }

    const a = epi.map((item) => ({ label: item.EPI_Name, value: item.ID }))
    const b = shed.map((item) => ({ label: item.Shed_Name, value: item.ID }))

    return (
        <>
            {showError("Erro ao cadastrar máquina")}
            {showSuccess("Máquina cadastrada com sucesso!")}

            <Nav />

            <p className={styles.t}>Cadastrar Máquina</p>
            <Form className={styles.form}>
                <Form.Group controlId="email">
                    <Form.ControlLabel>Código</Form.ControlLabel>
                    <Form.Control name="codigo" />
                </Form.Group>

                <Form.Group>
                    <Form.ControlLabel>EPI</Form.ControlLabel>
                    <TagPicker data={a} style={{ width: 300 }} onSelect={handleSelect} />
                </Form.Group>

                <Form.Group controlId="name">
                    <Form.ControlLabel>Barracão</Form.ControlLabel>
                    <Select
                        options={b}
                        className={styles.select}
                        onChange={e => setInsert(e.value)}
                    />
                </Form.Group>
            </Form>
            <div className={styles.btt}>
                <button className={styles.cadastrar} onClick={handleOpen} >Cadastrar</button>
            </div>

            <Footer />

            <Modal open={open} onClose={handleClose} >
                <Modal.Body>
                    <Form className={styles.forms} fluid formValue={epiQtt}>{
                        epiList.map(element => {
                            console.log(element)
                            return (
                                <div key={element.ID}>
                                    <p className={styles.Label}>{element.EPI_Name}</p>
                                    <div className={styles.line}>
                                        <span className={styles.qtd}>Qtd{element.ID}</span>
                                        <Form.Control
                                            name={element.ID}
                                            className={styles.f}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NewMaquina
