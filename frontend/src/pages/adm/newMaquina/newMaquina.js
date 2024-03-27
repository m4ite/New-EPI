import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import "./style.scss"

import { Form, TagPicker } from 'rsuite';
import newMaquina from "./newMaquina.png"
import Select from 'react-select'
import { useNavigate } from "react-router-dom";


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


    return (
        <>
            <Nav />

            <p className="t">Cadastrar Máquina</p>
            <div className="all">
                <Form>
                <Form.Group controlId="email">
                        <Form.ControlLabel>Código</Form.ControlLabel>
                        <Form.Control name="email" />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.ControlLabel>Barracão</Form.ControlLabel>
                        <Select options={options1} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.ControlLabel>Prazo para retirada <span style={{ fontSize: "15px" }}>(dias)</span></Form.ControlLabel>
                        <Form.Control name="email" type="number" />
                    </Form.Group>
                    <Form.Group>
                        <Form.ControlLabel>EPI</Form.ControlLabel>
                        <TagPicker data={data} style={{ width: 300 }} />
                    </Form.Group>
                    <button className="cadastrar" onClick={() => Navigate("/NewMaquina2")}>Próximo</button>
                </Form>
                <img src={newMaquina}></img>
            </div>

            <Footer />

        </>
    )
}

export default NewMaquina
