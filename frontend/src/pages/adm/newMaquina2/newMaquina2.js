import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import "./style.scss"

import { Form } from 'rsuite';


function NewMaquina2() {

    return (
        <>
            <Nav />
            <div className="t">
                Protetor Auricular
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <span>QTD Max:</span>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Control name="email" type="number" />
                    </Form.Group>
                </Form>
            </div>

            <div className="t">
                Protetor Auricular
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <span>QTD Max:</span>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Control name="email" type="number" />
                    </Form.Group>
                </Form>
            </div>


            <div className="t">
                Protetor Auricular
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <span>QTD Max:</span>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Control name="email" type="number" />
                    </Form.Group>
                </Form>
            </div>
            <button className="cadastrar">Cadastrar</button>
          

            <Footer />
        </>
    )

}

export default NewMaquina2
