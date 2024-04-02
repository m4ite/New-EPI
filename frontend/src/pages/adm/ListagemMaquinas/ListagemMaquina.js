import styles from "./style.module.css"

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import { useEffect, useState } from "react";
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Button } from 'rsuite';


function ListagemMaquina() {
    const [nodes, setMachines] = useState([])

    async function CallMachines() {
        try {
            const response = await axios.get('http://localhost:8080/machine');
            setMachines(response.data)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        CallMachines()
    }, [])

    const Navigate = useNavigate();

    // const nodes = [
    //     {
    //         codigo: "544354",
    //         localização: 'Ct 401',
    //         status: "ok",
    //         buttons: <div style={{ float: "right" }}>
    //             <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
    //             <button className="delete"><FontAwesomeIcon icon={faTrashCan} /></button>
    //         </div>
    //     },
    //     {
    //         codigo: "544354",
    //         localização: 'Ct 401',
    //         status: "ok",
    //         buttons: <div style={{ float: "right" }}>
    //             <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
    //             <button className="delete"><FontAwesomeIcon icon={faTrashCan} /></button>
    //         </div>
    //     },
    //     {
    //         codigo: "544354",
    //         localização: 'Ct 401',
    //         status: "ok",
    //         buttons: <div style={{ float: "right" }}>
    //             <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
    //             <button className="delete"><FontAwesomeIcon icon={faTrashCan} /></button>
    //         </div>
    //     },
    //     {
    //         codigo: "544354",
    //         localização: 'Ct 401',
    //         status: "ok",
    //         buttons: <div style={{ float: "right" }}>
    //             <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
    //             <button className="delete"><FontAwesomeIcon icon={faTrashCan} /></button>
    //         </div>
    //     },
    //     {
    //         codigo: "544354",
    //         localização: 'Ct 401',
    //         status: "ok",
    //         buttons: <div style={{ float: "right" }}>
    //             <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
    //             <button className="delete"><FontAwesomeIcon icon={faTrashCan} /></button>
    //         </div>
    //     },
    // ];

    const data = { nodes };
    const theme = useTheme(getTheme());
    const pagination = usePagination(data, {
        state: { page: 0, size: 5, },
    });
    const COLUMNS = [
        { label: 'Código', renderCell: (item) => item.codigo },
        { label: 'Localização', renderCell: (item) => item.localização },
        { label: 'Status', renderCell: (item) => item.status },
        // { label: ' ', renderCell: (item) => item.buttons },
    ];

    return (
        <>
            <Nav />
            <div className={styles.rec}>
                <Button className={styles.new} href="NewMaquina">
                    <FontAwesomeIcon icon={faPlus} />
                    nova máquina
                </Button>
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
