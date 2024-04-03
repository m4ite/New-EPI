import styles from "./style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { InputGroup, Form } from 'rsuite';

function Login() {

    const [seePassword, setSeePassword] = useState(false)

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.supergraphic} />
                <div className={styles.logo} />

                <Form className={styles.forms} fluid>
                    <p className={styles.Label}>EDV</p>
                    <Form.Control name="name" />


                    <p className={styles.Label}>Password</p>
                    <Form.Group>
                        <InputGroup >
                            {seePassword ? <Form.Control type="text" /> : <Form.Control type="password" />}
                            <InputGroup.Button tabIndex={-1} onClick={() => setSeePassword(!seePassword)}>
                                {seePassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                            </InputGroup.Button>
                        </InputGroup>
                    </Form.Group>
                </Form>
                
                <a href="/Home" className={styles.butt}>Login</a>
            </div>
        </div>
    )
}
export default Login