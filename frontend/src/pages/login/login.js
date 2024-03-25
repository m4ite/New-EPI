import { useState } from "react";
import "./style.css"
import axios from "axios"

import { useHistory } from 'react-router-dom';

import { useNavigate } from 'react-router'
import Nav from "../../components/nav";

function Login(){

    const [edv, setEDV] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    async function TryLogin() {
        const userLogin = {
            "edv": edv,
            "password": password
        }

        console.log(userLogin)
        try {
          const response = await axios.post('http://localhost:8080/login', userLogin);
          
          if (response.status == 200){
            sessionStorage.setItem("Usuario", JSON.stringify(response.data))
            navigate("/Home")
          }

          if (response.status == 404){
            console.log(response.data)
          }


        } catch (error) {
          console.error('Erro ao fazer requisição POST:', error.message);
        }
    }

    return(
        <div className="body">
            <div className="container">
                <div className="supergraphic"/>
                <div className="logo"/>

                <div className="forms">
                <p className="Label">EDV</p>
                <input onChange={e => setEDV(e.target.value)}></input>

                <p className="Label">Password</p>
                <input onChange={e => setPassword(e.target.value)}></input>

                </div>
                <a><button className="butt" onClick={() => TryLogin()}>Login</button></a>             
            </div>
        </div>
    )

}
export default Login