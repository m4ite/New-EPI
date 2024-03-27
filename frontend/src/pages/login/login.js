import styles from "./style.module.css"
function Login() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.supergraphic} />
                <div className={styles.logo} />

                <div className={styles.forms}>
                    <p className={styles.Label}>Username</p>
                    <input></input>

                    <p className={styles.Label}>Password</p>
                    <input></input>

                </div>
                <a href="/Home">
                    <button className={styles.butt}>Login</button>
                </a>
            </div>
        </div>
    )
}
export default Login