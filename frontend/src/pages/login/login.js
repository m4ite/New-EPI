import { useState } from "react";
import styles from "./style.module.css" 
import axios from "axios"
import { useNavigate } from 'react-router'

function Login(){

    const [edv, setEDV] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("")

    const navigate = useNavigate()

    async function TryLogin() {
        const userLogin = {
            "edv": edv,
            "password": password
        }
        try {
          const response = await axios.post('http://localhost:8080/login', userLogin);
          
          if (response.status == 200){
            sessionStorage.setItem("Usuario", JSON.stringify(response.data))
            if (response.data[0].IsAdm){
                navigate("/HomeADM")
            }
            else{
                navigate("/Home")
            }
          }


        } catch (error) {
          if (error.response.status == 404){
            setError(error.response.data.message)
          }
        }
    }

    return(
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.supergraphic}/>
                <div className={styles.logo}/>

                <div className={styles.forms}>
                <p className={styles.Label}>EDV</p>
                <input onChange={e => setEDV(e.target.value)}></input>

                <p className={styles.Label}>Password</p>
                <input onChange={e => setPassword(e.target.value)}></input>

                </div>
                <a><button className={styles.butt} onClick={() => TryLogin()}>Login</button></a>  
                {error && <p style={{ color: 'red' }}>{error}</p>}           
            </div>
        </div>
    )
}
export default Login