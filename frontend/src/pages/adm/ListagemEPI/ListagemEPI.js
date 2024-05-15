import styles from "./style.module.css"

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"
import { useEffect, useState } from "react";
import axios from "axios";

import { Message, Table, Pagination } from "rsuite"
import { useParams } from "react-router-dom";

function ListagemEPI() {
    const { id } = useParams();

    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };
    const [nodes, setMachines] = useState([])

    const [epi, setEpi] = useState({
        nome: "",
        prazo: ""
    })

    useEffect(() => {
        CallEpis()
    }, [])

    async function CallEpis() {
        try {
            const response = await axios.get(`http://localhost:8080/epis/${id}`);
            console.log(response.data)
            setMachines(response.data)
        } catch (error) {
            console.error(error.message);
        }
    }

    const { Column, HeaderCell, Cell } = Table;

    const data = nodes.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });

    const styleHeader = {
        fontSize: "15px", fontWeight: 700, color: "black"
    }

    function showError(message) {
        return <Message showIcon type="error" closable className={styles.alert}>
            <strong>Error!</strong> {message}
        </Message>
    }

    function showSuccess(message) {
        return <Message showIcon type="success" closable className={styles.alert}>
            <strong>Success!</strong> {message}
        </Message>
    }

    return (
        <>
            {/* {showSuccess("EPI cadastrado com sucesso!")}

            {showError("Falha ao cadastrar EPI!")} */}
            <Nav />

            <div className={styles.rec}>
                <p className={styles.t}>Nome EPI</p>
                <Table data={data} hover={true} rowHeight={60} height={400}>
                    <Column width={180}>
                        <HeaderCell style={styleHeader}>Máquina</HeaderCell>
                        <Cell dataKey="Machine_code" />
                    </Column>

                    <Column width={180}>
                        <HeaderCell style={styleHeader}>Barracão</HeaderCell>
                        <Cell dataKey="Shed_Name" />
                    </Column>
                    <Column width={180}>
                        <HeaderCell style={styleHeader}>Quantidade</HeaderCell>
                        <Cell dataKey="Quantity" />
                    </Column>
                </Table>

                <div className={styles.pages}>
                    <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        maxButtons={5}
                        size="xs"
                        layout={['pager']}
                        total={nodes.length}
                        limitOptions={[10, 30, 50]}
                        limit={limit}
                        activePage={page}
                        onChangePage={setPage}
                        onChangeLimit={handleChangeLimit}
                    />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ListagemEPI
