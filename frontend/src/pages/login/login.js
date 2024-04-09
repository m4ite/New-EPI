import { useState } from "react";
import styles from "./style.module.css"
import axios from "axios"
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { InputGroup, Form } from 'rsuite';

function Login() {

  const [form, setForm] = useState({
    edv: '',
    password: ''
  }
  )

  const [error, setError] = useState("")
  const [seePassword, setSeePassword] = useState(false)

  const navigate = useNavigate()

  async function TryLogin() {
    try {
      const response = await axios.post('http://localhost:8080/login', form);

      if (response.status == 200) {
        sessionStorage.setItem("Usuario", JSON.stringify(response.data))
        if (response.data[0].IsAdm) {
          navigate("/HomeADM")
        }
        else {
          navigate("/Home")
        }
      }
    } catch (error) {
      if (error.response.status == 404) {
        setError(error.response.data.message)
      }
    }
  }


  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.supergraphic} />
        <div className={styles.logo} />
        <Form className={styles.forms} fluid onChange={setForm} formValue={form}>
          <p className={styles.Label}>EDV</p>
          <Form.Control name="edv"/>


          <p className={styles.Label}>Password</p>
          <Form.Group>
            <InputGroup >
              {seePassword ? <Form.Control type="text" name="password"/> : <Form.Control type="password" name="password" />}
              <InputGroup.Button tabIndex={-1} onClick={() => setSeePassword(!seePassword)}>
                {seePassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
              </InputGroup.Button>
            </InputGroup>
          </Form.Group>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Form>

        <a className={styles.butt} onClick={() => TryLogin()}>Login</a>
      </div>
    </div>
  )
}

export default Login