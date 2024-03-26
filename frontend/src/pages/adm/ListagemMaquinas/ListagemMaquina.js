import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';


import "./style.css"

import { useNavigate } from "react-router-dom";
import { Button } from 'rsuite';


function ListagemMaquina() {

    const Navigate = useNavigate();


    const nodes = [
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
            buttons: <div style={{ float: "right" }}>
                <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
                <button className="delete"><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        },
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
            buttons: <div style={{ float: "right" }}>
                <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
                <button className="delete"><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        },
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
            buttons: <div style={{ float: "right" }}>
                <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
                <button className="delete"><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        },
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
            buttons: <div style={{ float: "right" }}>
                <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
                <button className="delete"><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        },
        {
            codigo: "544354",
            localização: 'Ct 401',
            status: "ok",
            buttons: <div style={{ float: "right" }}>
                <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
                <button className="delete"><FontAwesomeIcon icon={faTrashCan} /></button>
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
            <div className="rec">
            <Button className="new" href="NewEPI">
                    <FontAwesomeIcon icon={faPlus} />
                    nova máquina
                </Button>
                <CompactTable columns={COLUMNS} data={data} theme={theme} pagination={pagination} />
                <span className="pages">
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
