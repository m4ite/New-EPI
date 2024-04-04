import styles from "./style.module.css"

import Nav from "../../components/nav"
import Footer from "../../components/footer"

import Select from 'react-select'

function SearchEPI() {

    const options = [
        { value: 'Luva de Látex', label: 'Luva de Látex' },
        { value: 'Protetor auricular', label: 'Protetor auricular' },
        { value: 'Óculos', label: 'Óculos' }
    ]

    return (
        <>
            <Nav />
            <div className={styles.square}>
                <p className={styles.t}>Digite o EPI desejado</p>

                <div className={styles.select}>
                    <Select options={options} />
                </div>

                <a className={styles.button} href="MaquinaEPI">Buscar</a>

            </div>


            <Footer />
        </>
    )
}

export default SearchEPI