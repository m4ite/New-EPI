import Footer from "../../components/footer"
import Nav from "../../components/nav"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select'
import styles from "./style.module.css"
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";
import { Modal, Button, DatePicker } from 'rsuite';
import { useEffect, useState } from 'react';

function Removes() {

    const [nodes, setRemoves] = useState([])
    const id = JSON.parse(sessionStorage.getItem("Usuario"))[0].ID

    async function CallRemoves() {
        const user = {
            id: id
        }
        try {
            const response = await axios.post('http://localhost:8080/withdrawal', user);
            console.log(response.data)
            setRemoves(response.data)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        CallRemoves()
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
        { label: 'Item', renderCell: (item) => item.EPi_Name },
        { label: 'Local', renderCell: (item) => item.Shed_Name },
        {
            label: 'Ultima Retirada', renderCell: (item) =>
                `${item.Date_.substring(8, 10)}/${item.Date_.substring(5, 7)}/${item.Date_.substring(0, 4)}`
        },
        {
            label: 'Proxima Retirada', renderCell: (item) =>
                `${item.NextRemove.substring(8, 10)}/${item.NextRemove.substring(5, 7)}/${item.NextRemove.substring(0, 4)}`
        },
    ];

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <>
            <Nav />
            <p className={styles.t}>Histórico de retiradas</p>

            <div className={styles.rec}>
                <Button className={styles.filter} onClick={handleOpen}><FontAwesomeIcon icon={faFilter} /></Button>
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

            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title style={{ fontWeight: 700 }}>Filtros</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title style={{ marginBottom: "1em", marginTop: "2em" }}>EPI</Modal.Title>
                    <Select options={options} />

                    <Modal.Title style={{ marginBottom: "1em", marginTop: "2em" }}>Data Retirada:</Modal.Title>
                    <div style={{ display: "flex", justifyContent: "space-around" }}> <DatePicker format="dd/MM/yyyy" /> <DatePicker format="dd/MM/yyyy" /></div>
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

export default Removes
