import styles from "./style.module.css"

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'rsuite';

import { useNavigate } from "react-router-dom";

function ListagemMaquina() {

    const Navigate = useNavigate();

    const b = {
        code: <div style={{ float: "right" }}>
            <button className={styles.edit} onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
            <button className={styles.delete}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    }

    const nodes = [
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
            buttons: <div style={{ float: "right" }}>
                <button className={styles.edit} onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
                <button className={styles.delete}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        },
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
            buttons: <div style={{ float: "right" }}>
                <button className={styles.edit} onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
                <button className={styles.delete}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        },
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
            buttons: <div style={{ float: "right" }}>
                <button className={styles.edit} onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
                <button className={styles.delete}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        },
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
            buttons: <div style={{ float: "right" }}>
                <button className={styles.edit} onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
                <button className={styles.delete}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        },
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
            buttons: <div style={{ float: "right" }}>
                <button className={styles.edit} onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
                <button className={styles.delete}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        },
    ];
    const data = { nodes };
    const theme = useTheme(getTheme());
    const pagination = usePagination(data, {
        state: { page: 0, size: 5, },
        onChange: onPaginationChange,
    });
    const COLUMNS = [
        { label: 'Código', renderCell: (item) => item.codigo },
        { label: 'Localização', renderCell: (item) => item.localização },
        { label: 'Status', renderCell: (item) => item.status },
        { label: ' ', renderCell: (item) => item.buttons },
    ];


    function onPaginationChange(action, state) {
        console.log(action, state);
    }

    return (
        <>
            <Nav />
            <Button className={styles.new} href="NewMaquina">
                <FontAwesomeIcon icon={faPlus} />
                nova máquina
            </Button>

            <div className={styles.rec}>

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
                            onClick={() => pagination.fns.onSetPage(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </span>
            </div>
            <Footer />
        </>
    )
}

export default ListagemMaquina
