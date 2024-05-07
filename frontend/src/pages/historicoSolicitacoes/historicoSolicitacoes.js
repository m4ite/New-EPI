import Nav from "../../components/nav"
import Footer from "../../components/footer"

import styles from "./style.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Button, Steps, Table, Pagination, FlexboxGrid } from 'rsuite';

import { useState, useEffect } from 'react';
import axios from "axios";

function HistoricoSolicitacoes() {

    const [nodes, setNodes] = useState([]);
    
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const { Column, HeaderCell, Cell } = Table;

    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const data = nodes.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/getRequestClient/${JSON.parse(sessionStorage.getItem("Usuario"))[0].EDV}`)
        .then( (res) => {setNodes(res.data)})
        .catch((err) => console.log(err))
    }, [])

    console.log(nodes)

    // const nodes = [
    //     {
    //         id: '0',
    //         data: '25/05/2024',
    //         name: 'Luva de Latex',
    //         retirada: "Ct401",
    //         status: 0
    //     },
    //     {
    //         id: '1',
    //         data: '25/05/2024',
    //         name: 'Luva de Latex',
    //         retirada: "Ct401",
    //         status: 1
    //     }, {
    //         id: '2',
    //         data: '25/05/2024',
    //         name: 'Luva de Latex',
    //         retirada: "Ct401",
    //         status: 2
    //     },
    // ];



    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const styleHeader={
        fontSize: "15px", fontWeight: 700, color: "black"
    }

    function ClickButton(a){
        axios.patch(`http://localhost:8080/requestClient/${a.ID}`)
        alert(`
        Uniforme retirado! 
        ID: ${a.ID}
        Item: ${a.Uniform_name}`)
    }

    nodes.map(n => n.Request_Date = n.Request_Date.length > 10  ? `${n.Request_Date.substring(8, 10)}/${n.Request_Date.substring(5, 7)}/${n.Request_Date.substring(0, 4)}` : n.Request_Date)


    return (
        <>
            <Nav />
            <p className={styles.t}>Histórico de solicitações</p>

            <div className={styles.rec}>
                <Button className={styles.filter} onClick={handleOpen}><FontAwesomeIcon icon={faFilter} /></Button>
               
                        <Table data={data} hover={true} rowHeight={60} height={400}>
                            <Column width={150} >
                                <HeaderCell style={styleHeader}>ID</HeaderCell>
                                <Cell dataKey="ID" />
                            </Column>

                            <Column width={150} >
                                <HeaderCell style={styleHeader}>Data</HeaderCell>
                                <Cell dataKey="Request_Date" />
                            </Column>

                            <Column width={150}>
                                <HeaderCell style={styleHeader}>Item</HeaderCell>
                                <Cell dataKey="Uniform_name" />
                            </Column>

                            <Column width={150}>
                                <HeaderCell style={styleHeader}>Local de Retirada</HeaderCell>
                                <Cell dataKey="Shed_Name" />
                            </Column>

                            <Column width={400} align="center" flexGrow={1}>
                                <HeaderCell style={styleHeader}>Status</HeaderCell>
                                <Cell dataKey="Request_Status">
                                    {rowData => (
                                        <Steps current={rowData.Request_Status}>
                                            <Steps.Item title="Preparando" />
                                            <Steps.Item title="Entregue" />
                                            <Steps.Item title="Retirado" />
                                        </Steps>
                                    )}
                                </Cell>
                            </Column>


                            <Column width={150} fixed="right">
                                <HeaderCell></HeaderCell>

                                <Cell style={{ padding: '6px' }}>
                                    {rowData => (
                                        <Button onClick={() => ClickButton(rowData)}>
                                            Confirmar entrega
                                        </Button>
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

export default HistoricoSolicitacoes