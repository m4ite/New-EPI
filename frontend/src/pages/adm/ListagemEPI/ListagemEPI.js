import styles from "./style.module.css"

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import { Message, Table,Pagination } from "rsuite"

import { useState } from "react";

function ListagemEPI() {

    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const { Column, HeaderCell, Cell } = Table;

    const nodes = [
        {
            id: '0',
            maquina: 'Luva de Latex',
            barracao: "401A",
            quantidade: 25
        }, 
        {
            id: '0',
            maquina: 'Luva de Latex',
            barracao: "303",
            quantidade: 25
        }, 
        {
            id: '0',
            maquina: 'Luva de Latex',
            barracao: "401",
            quantidade: 25
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
                        <Cell dataKey="maquina"/>
                    </Column>

                    <Column width={180}>
                        <HeaderCell style={styleHeader}>Barracão</HeaderCell>
                        <Cell dataKey="barracao"/>
                    </Column>
                    <Column width={180}>
                        <HeaderCell style={styleHeader}>Quantidade</HeaderCell>
                        <Cell dataKey="quantidade"/>
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
