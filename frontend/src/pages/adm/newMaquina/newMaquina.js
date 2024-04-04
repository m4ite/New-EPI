import styles from "./style.module.css"
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import { Form, TagPicker, Modal, Button, InputGroup } from 'rsuite'
import Select from 'react-select'

function NewMaquina() {

    const Navigate = useNavigate()

    const options1 = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const data = ['Oculos', 'Botina', 'Protetor Auricular', 'Luva Latex'].map(
        item => ({ label: item, value: item })
    );

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Nav />
            <p className={styles.t}>Cadastrar Máquina</p>
            <Form className={styles.form}>
                <Form.Group controlId="email">
                    <Form.ControlLabel>Código</Form.ControlLabel>
                    <Form.Control name="codigo" />
                </Form.Group>

                <Form.Group>
                    <Form.ControlLabel>EPI</Form.ControlLabel>
                    <TagPicker data={data} style={{ width: 300 }} />
                </Form.Group>

                <Form.Group controlId="name">
                    <Form.ControlLabel>Barracão</Form.ControlLabel>
                    <Select options={options1} className={styles.select} />
                </Form.Group>
            </Form>
            <div className={styles.btt}>
                <button className={styles.cadastrar} onClick={handleOpen} >Cadastrar</button>
            </div>

            <Footer />


            <Modal open={open} onClose={handleClose} >
                <Modal.Body>
                    <Form className={styles.forms} fluid>
                        <p className={styles.Label}>Protetor Auricular</p>
                        <div className={styles.line}>
                            <span className={styles.qtd}>Qtd</span>
                            <Form.Control name="sla" className={styles.f}/>
                        </div>

                        <p className={styles.Label}>Óculos</p>
                        <div className={styles.line}>
                        <span className={styles.qtd}>Qtd</span>
                            <Form.Control name="sla2" className={styles.f}/>
                        </div>
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
