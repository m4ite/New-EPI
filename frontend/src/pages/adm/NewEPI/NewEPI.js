import Nav from "../../../components/nav"
import Footer from "../../../components/footer"


import { Form, Input } from 'rsuite';

import newEPI from "./newEPI.jpg"

import "./style.css"

function NewEPI() {

    return (
        <>
            <Nav />
            <p className="t">Cadastrar EPI</p>
            <div className="all">
                <Form>
                    <Form.Group controlId="name">
                        <Form.ControlLabel>Nome</Form.ControlLabel>
                        <Form.Control name="name" />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.ControlLabel>Prazo para retirada <span style={{fontSize:"15px"}}>(dias)</span></Form.ControlLabel>
                        <Form.Control name="email" type="number" />
                    </Form.Group>
                    <button className="cadastrar">Cadastrar</button>
                </Form>

                <img src={newEPI}></img>
            </div>

            <Footer />

        </>
    )
}

export default NewEPI
