import styles from "./style.module.css"

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import { Form } from 'rsuite';

function NewMaquina2() {

    return (
        <>
            <Nav />
            <div className={styles.t}>
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

            <div className={styles.t}>
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


            <div className={styles.t}>
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
            <button className={styles.cadastrar}>Cadastrar</button>
            <Footer />
        </>
    )
}

export default NewMaquina2
