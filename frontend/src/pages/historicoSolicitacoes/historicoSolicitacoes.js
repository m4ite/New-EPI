import Nav from "../../components/nav"
import Footer from "../../components/footer"

import styles from "./style.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Button, Steps, Table, Pagination, FlexboxGrid } from 'rsuite';

import { useState } from 'react';

function HistoricoSolicitacoes() {

    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const { Column, HeaderCell, Cell } = Table;

    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const nodes = [
        {
            id: '0',
            data: '25/05/2024',
            name: 'Luva de Latex',
            retirada: "Ct401",
            status: 0
        },
        {
            id: '1',
            data: '25/05/2024',
            name: 'Luva de Latex',
            retirada: "Ct401",
            status: 1
        }, {
            id: '2',
            data: '25/05/2024',
            name: 'Luva de Latex',
            retirada: "Ct401",
            status: 2
        },
    ];

    const data = nodes.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const styleHeader={
        fontSize: "15px", fontWeight: 700, color: "black"
    }

    return (
        <>
            <Nav />
            <p className={styles.t}>Histórico de solicitações</p>

            <div className={styles.rec}>
                <Button className={styles.filter} onClick={handleOpen}><FontAwesomeIcon icon={faFilter} /></Button>
               
                        <Table data={data} hover={true} rowHeight={60} height={400}>
                            <Column width={150} >
                                <HeaderCell style={styleHeader}>Data</HeaderCell>
                                <Cell dataKey="data" />
                            </Column>

                            <Column width={150}>
                                <HeaderCell style={styleHeader}>Item</HeaderCell>
                                <Cell dataKey="name" />
                            </Column>

                            <Column width={150}>
                                <HeaderCell style={styleHeader}>Local de Retirada</HeaderCell>
                                <Cell dataKey="retirada" />
                            </Column>

                            <Column width={400} align="center" flexGrow={1}>
                                <HeaderCell style={styleHeader}>Status</HeaderCell>
                                <Cell dataKey="status">
                                    {rowData => (

                                        <Steps current={rowData.status}>
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
                                        <Button onClick={() => alert(`id:${rowData.id}`)}>
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