import styles from "../ListagemMaquinas/style.module.css"

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import { useState } from 'react';

import { Table, Pagination, IconButton } from 'rsuite';
import { useEffect } from "react";
import axios from "axios";


import { useNavigate } from "react-router"

import MoreIcon from '@rsuite/icons/More';

function ListagemMaquina() {

    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const { Column, HeaderCell, Cell } = Table;
    const [nodes, setMachines] = useState([])

    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    // const nodes = [
    //     {
    //         codigo: "544354",
    //         localização: 'Ct 401',
    //         status: "ok",
    //     },
    //     {
    //         codigo: "544354",
    //         localização: 'Ct 401',
    //         status: "ok",
    //     },
    //     {
    //         codigo: "544354",
    //         localização: 'Ct 401',
    //         status: "ok",
    //     },
    //     {
    //         codigo: "544354",
    //         localização: 'Ct 401',
    //         status: "ok"
    //     },
    //     {
    //         codigo: "544354",
    //         localização: 'Ct 401',
    //         status: "ok"
    //     },
    // ];

    
    
    const styleHeader = {
        fontSize: "15px", fontWeight: 700, color: "black"
    }
    
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:8080/machine`)
        .then((res) => {setMachines(res.data)})
        .catch((er) => console.error(er.message))
    },[])

    const data = nodes.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });

    return (
        <>
            <Nav />

            <div className={styles.rec}>
                <Table data={data} hover={true} rowHeight={60} height={400}
                    onRowClick={rowData => { navigate("/estoqueMaquina") }}>
                    <Column width={180}>
                        <HeaderCell style={styleHeader}>Código</HeaderCell>
                        <Cell dataKey="codigo" />
                    </Column>

                    <Column width={180}>
                        <HeaderCell style={styleHeader}>Localização</HeaderCell>
                        <Cell dataKey="localização" />
                    </Column>

                    <Column width={180}>
                        <HeaderCell style={styleHeader}>Status</HeaderCell>
                        <Cell dataKey="status" />
                    </Column>

                    <Column width={150} fixed="right">
                        <HeaderCell></HeaderCell>

                        <Cell style={{ padding: '6px' }}>
                            {rowData => (
                                    <IconButton icon={<MoreIcon />} onClick={() => alert(`id:${rowData.id}`)}/>
                            )}
                        </Cell>
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

export default ListagemMaquina
