import styles from "./style.module.css"

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"
import { useState } from 'react';

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { Button, Modal, Form, Message, ButtonToolbar, IconButton } from 'rsuite';
import { useNavigate } from "react-router-dom";

import PlusIcon from '@rsuite/icons/Plus';
import RemindIcon from '@rsuite/icons/legacy/Remind';


function ListagemEPI() {

    const Navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);



    const [editar, setEditar] = useState();
    function handleEdit() {
        setOpen(true)
        setEditar(true)
    }

    const handleClose = () => {
        setOpen(false)
        setEditar(false)
    }

    const handleCloseDelete = () =>{
        setOpenDelete(false)
    }

    const nodes = [
        {
            id: '0',
            name: 'Luva de Latex',
            proxima: new Date(2020, 1, 15),
            buttons: <div style={{ float: "right" }}>
                <button className={styles.edit} onClick={() => handleEdit()}><FontAwesomeIcon icon={faPencil} /></button>
                <button className={styles.delete} onClick={() => handleOpenDelete()}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        }
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
            {showSuccess("EPI cadastrado com sucesso!")}

            {showError("Falha ao cadastrar EPI!")}
            <Nav />

            <ButtonToolbar className={styles.new} >
                <IconButton onClick={handleOpen} icon={<PlusIcon />}>Add EPI</IconButton>
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

export default ListagemEPI
