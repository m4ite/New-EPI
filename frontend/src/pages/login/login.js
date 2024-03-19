import "./style.css"
function Login(){
    return(
        <div className="body">
            <div className="container">
                <div className="supergraphic"/>
                <div className="logo"/>

                <div className="forms">
                <p className="Label">Username</p>
                <input></input>

                <p className="Label">Password</p>
                <input></input>
                
                </div>
                <a href="/Home"><button className="butt">Login</button></a>             
            </div>
        </div>
    )

}
export default Login