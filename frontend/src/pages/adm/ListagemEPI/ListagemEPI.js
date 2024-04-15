import styles from "./style.module.css"

import Nav from "../../../components/nav"
import Footer from "../../../components/footer"

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { Button, Modal, Form, Message, useToaster } from 'rsuite';

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



function ListagemEPI() {

    const [epi, setEpi] = useState({
        nome:"",
        prazo:""
    })

    const [nodes, setMachines] = useState([

    ])

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [editar, setEditar] = useState();
    const data = { nodes };
    const theme = useTheme(getTheme());
    const pagination = usePagination(data, {
        state: { page: 0, size: 5, },
        onChange: onPaginationChange,
    });
    const COLUMNS = [
        { label: 'Item', renderCell: (item) => item.EPI_Name },
        { label: 'Tempo de Retirada', renderCell: (item) => item.Days_time },
        { label: ' ', renderCell: (item) => item.buttons },
    ];
    const toaster = useToaster();

    useEffect(() => {
        CallEpis()
    }, [])

    async function CallEpis() {
        try {
            const response = await axios.get('http://localhost:8080/epis');
            setMachines(response.data)
        } catch (error) {
            console.error(error.message);
        }
    }

    async function AddClose() {
        setEditar(false)
        try{
            const response = await axios.post('http://localhost:8080/epis', epi)
            if (response.status == 200){
                console.log("adicionou")
                setOpen(false)
            }

        } catch (error) {
            console.error(error.message)
        }
    }

    function handleEdit() {
        setOpen(true)
        setEditar(true)
    }

    const handleClose = () => {
        setOpen(false)
        setEditar(false)
    }


    function onPaginationChange(action, state) {
        console.log(action, state);
    }

    function showError(message) {
        return <Message showIcon type="error" closable>
            <strong>Error!</strong> {message}
        </Message>
    }

    function showSuccess(message) {
        return <Message showIcon type="success" closable>
            <strong>Success!</strong> You can use the `Message` component to display a success message.
        </Message>
    }

    return (
        <>
            {showSuccess("EPI cadastrado com sucesso!")}

            {showError("Falha ao cadastrar EPI!")}
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
                    <Form className={styles.forms} fluid onChange={setEpi}>

                        <p className={styles.Label}>Nome</p>
                        <Form.Control name="nome" className={styles.f}/>

                        <p className={styles.Label}>Prazo para retirada:  <span className={styles.dias}>(dias)</span></p>
                        <Form.Control name="prazo" className={styles.f}/>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => AddClose()} appearance="primary">
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
