import styles from "../ListagemMaquinas/style.module.css"

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import { useEffect, useState } from "react";
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ButtonToolbar, IconButton, Modal, Button } from 'rsuite';
import { useNavigate } from "react-router-dom";
import PlusIcon from '@rsuite/icons/Plus';
import RemindIcon from '@rsuite/icons/legacy/Remind';
import axios from "axios";


function ListagemMaquina() {
    const [nodes, setMachines] = useState([])
    const Navigate = useNavigate();
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
    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () =>{
        setOpenDelete(false)
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/machine`)
        .then((res) => {setMachines(res.data)})
        .catch((er) => console.error(er.message))
    })

    return (
        <>
            <Nav />
            <ButtonToolbar className={styles.new} >
                <IconButton icon={<PlusIcon />} onClick={() => Navigate("/NewMaquina")}>Add Maquina</IconButton>
            </ButtonToolbar>

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


            <Modal backdrop="static" role="alertdialog" open={openDelete} onClose={handleCloseDelete} size="xs">
                <Modal.Body>
                    <RemindIcon style={{ color: 'red', fontSize: 24, marginRight: "5%" }} />
                    Você tem certeza que deseja deletar esse item?
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleCloseDelete} appearance="primary" color="red">
                        Delete
                    </Button>
                    <Button onClick={handleCloseDelete} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ListagemMaquina
