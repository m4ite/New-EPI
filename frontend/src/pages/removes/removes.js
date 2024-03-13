import Footer from "../../components/footer"
import Nav from "../../components/nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

import "./style.css"

function Removes() {

    const [currentPage, setCurrentPage] = useState(1);


    return (
        <>
        <Nav/>
            <p className="t">Histórico de retiradas</p>
            <button className="filter"><FontAwesomeIcon icon={faFilter} /></button>
            <table>
                <thead>
                    <tr>
                        <th>Última Retirada</th>
                        <th>Item</th>
                        <th>Próxima Retirada</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>28/01/2024</td>
                        <td>Protetor auricular descartável</td>
                        <td>Disponível</td>
                    </tr>
                    <tr>
                        <td>28/01/2024</td>
                        <td>Luva látex</td>
                        <td>28/01/2024</td>
                    </tr>
                    <tr>
                        <td>28/01/2024</td>
                        <td>Óculos</td>
                        <td>28/01/2024</td>
                    </tr>
                </tbody>
            </table>

            <Footer/>
        </>
    )
}

export default Removes
