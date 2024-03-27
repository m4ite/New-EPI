import styles from "./style.module.css"

import Nav from "../../components/nav"
import Footer from "../../components/footer"

import Select from 'react-select'

function SearchEPI() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <>
            <Nav />
            <div className={styles.square}>
                <p className={styles.t}>Digite o EPI desejado</p>

                <div className={styles.select}>
                    <Select options={options} />
                </div>

                <a className={styles.button}>Buscar</a>

            </div>


            <Footer />
        </>
    )
}

export default SearchEPI