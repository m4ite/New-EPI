import styles from "./style.module.css"

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"
import { useState } from 'react';

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';


import { useNavigate } from "react-router-dom";
import { Button, Modal, Form } from 'rsuite';


function ListagemEPI() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const [editar, setEditar] = useState();
    function handleEdit() {
        setOpen(true)
        setEditar(true)
    }

    const handleClose = () =>{
        setOpen(false)
        setEditar(false)
    }

    const nodes = [
        {
            id: '0',
            name: 'Luva de Latex',
            proxima: new Date(2020, 1, 15),
            buttons: <div style={{ float: "right" }}>
                <button className={styles.edit} onClick={() => handleEdit()}><FontAwesomeIcon icon={faPencil} /></button>
                <button className={styles.delete}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        },
        // {
        //     id: '1',
        //     name: 'Protetor auricular',
        //     proxima: new Date(2020, 1, 15),
        //     buttons: <div style={{ float: "right" }}>
        //         <button className={styles.edit} onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
        //         <button className={styles.delete}><FontAwesomeIcon icon={faTrashCan} /></button>
        //     </div>
        // },
        // {
        //     id: '2',
        //     name: 'Óculos',
        //     proxima: new Date(2020, 1, 15),
        //     buttons: <div style={{ float: "right" }}>
        //         <button className={styles.edit} onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
        //         <button className={styles.delete}><FontAwesomeIcon icon={faTrashCan} /></button>
        //     </div>
        // },
        // {
        //     id: '3',
        //     name: 'Camisa manga longa',
        //     proxima: new Date(2020, 1, 15),
        //     buttons: <div style={{ float: "right" }}>
        //         <button className={styles.edit} onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
        //         <button className={styles.delete}><FontAwesomeIcon icon={faTrashCan} /></button>
        //     </div>
        // },
        // {
        //     id: '4',
        //     name: 'Camisa manga curta',
        //     proxima: new Date(2020, 1, 15),
        //     buttons: <div style={{ float: "right" }}>
        //         <button className={styles.edit} onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil} /></button>
        //         <button className={styles.delete}><FontAwesomeIcon icon={faTrashCan} /></button>
        //     </div>
        // }
    ];
    const data = { nodes };
    const theme = useTheme(getTheme());
    const pagination = usePagination(data, {
        state: { page: 0, size: 5, },
        onChange: onPaginationChange,
    });
    const COLUMNS = [
        { label: 'Item', renderCell: (item) => item.name },
        {
            label: 'Proxima Retirada', renderCell: (item) =>
                item.proxima.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', }),
        },
        { label: ' ', renderCell: (item) => item.buttons },
    ];

    function onPaginationChange(action, state) {
        console.log(action, state);
    }
    return (
        <>
            <Nav />

            <Button className={styles.new} onClick={handleOpen} href="#">
                <FontAwesomeIcon icon={faPlus} />
                novo EPI
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

            <Modal open={open} onClose={handleClose} >

                <Modal.Title className={styles.title}>
                    {editar ? "Editar EPI" : "Cadastrar EPI"}
                </Modal.Title>

                <Modal.Body>
                    <Form className={styles.forms} fluid>

                        <p className={styles.Label}>Nome</p>
                        <Form.Control name="nome" className={styles.f} />

                        <p className={styles.Label}>Prazo para retirada:  <span className={styles.dias}>(dias)</span></p>
                        <Form.Control name="prazo" className={styles.f} />

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ListagemEPI
