import styles from "./style.module.css"

import Nav from "../../components/nav"
import Footer from "../../components/footer"

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios";

function MaquinaEPI() {
    let { id } = useParams()
    const [nodes, setNodes] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/machineEpi/${id}`)
        .then( (res) => { setNodes(res.data)})
        .catch((er) => console.error(er.message))
    }, [])

    const data = { nodes };

    const theme = useTheme(getTheme());
    const pagination = usePagination(data, {
        state: { page: 0, size: 5, },
        onChange: onPaginationChange,
    });

    function onPaginationChange(action, state) {
        console.log(action, state);
    }

    const COLUMNS = [
        { label: 'Maquina', renderCell: (item) => item.Machine_code },
        { label: 'Local', renderCell: (item) => item.Shed_Name },
    ];


    return (
        <>
            <Nav />
            <div className={styles.t}>EPI: Nome do EPI</div>

            <div className={styles.rec}>
            <div className={styles.new} href="NewEPI">
                Proxima Retirada: <br></br>
                22/04/2024
                </div>
                <CompactTable columns={COLUMNS} data={data} theme={theme} pagination={pagination} />
                <span className={styles.pages}>
                    {" "}
                    {pagination.state.getPages(data.nodes).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            style={{
                                fontWeight: pagination.state.page === index ? "bold" : "normal",
                            }}
                            onClick={() => pagination.fns.onSetPage(index)}>
                            {index + 1}
                        </button>
                    ))}
                </span>
            </div>
            <Footer />
        </>
    )
}

export default MaquinaEPI
