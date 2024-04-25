import styles from "../ListagemMaquinas/style.module.css"

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import { useState } from 'react';

import { Table, Pagination} from 'rsuite';


function ListagemMaquina() {

    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const { Column, HeaderCell, Cell } = Table;

    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const nodes = [
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
        },
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
        },
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
        },
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok"
        },
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok"
        },
    ];

    const data = nodes.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });


    const styleHeader={
        fontSize: "15px", fontWeight: 700, color: "black"
    }

    return (
        <>
            <Nav />

            <div className={styles.rec}>
                <Table data={data} hover={true} rowHeight={60} height={400}
                onRowClick={rowData => { console.log(rowData.codigo); }}>
                    <Column width={180}>
                        <HeaderCell style={styleHeader}>Código</HeaderCell>
                        <Cell dataKey="codigo"/>
                    </Column>

                    <Column width={180}>
                        <HeaderCell style={styleHeader}>Localização</HeaderCell>
                        <Cell dataKey="localização"/>
                    </Column>

                    <Column width={180}>
                        <HeaderCell style={styleHeader}>Status</HeaderCell>
                        <Cell dataKey="status"/>
                    </Column>
                </Table>
            </div>

            <Footer />
        </>
    )
}

export default ListagemMaquina
