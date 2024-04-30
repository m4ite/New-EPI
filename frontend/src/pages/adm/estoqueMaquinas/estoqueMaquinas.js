import Nav from "../../../components/nav"
import Footer from "../../../components/footer"
import { Table, Pagination} from 'rsuite';
import { useState } from "react";
import styles from "./style.module.css"

function EstoqueMaquina() {
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const { Column, HeaderCell, Cell } = Table;
    const nodes = [
        {
            id: "544354",
            epi: 'Luva de Látex',
            quantidade: 250,
        },
        {
            id: "544354",
            epi: 'Luva de Látex',
            quantidade: 250,
        },
        {
            id: "544354",
            epi: 'Luva de Látex',
            quantidade: 250,
        }       
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
                <p className={styles.t}>ID - Localização</p>
                <Table data={data} hover={true} rowHeight={60} height={400}>
                    <Column width={180}>
                        <HeaderCell style={styleHeader}>EPI</HeaderCell>
                        <Cell dataKey="epi"/>
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


export default EstoqueMaquina