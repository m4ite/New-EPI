import Nav from "../../../components/nav"
import Footer from "../../../components/footer"


import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'rsuite';
import "./style.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ListagemEPI() {

    const Navigate = useNavigate();
    const [nodes, setMachines] = useState([])
    
    async function CallEpis() {
        try {
            const response = await axios.get('http://localhost:8080/epis');
            console.log(response.data)
            setMachines(response.data)
        } catch (error) {
            console.error(error.message);
        }
    }
    
    useEffect(() => {
        CallEpis()
    }, [])

    // const nodes = [
    //     {
    //         id: '0',
    //         name: 'Luva de Latex',
    //         proxima: new Date(2020, 1, 15),
    //         buttons: <div style={{float: "right"}}>
    //         <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil}/></button>
    //         <button className="delete"><FontAwesomeIcon icon={faTrashCan}/></button>
    //     </div>
    //     },
    //     {
    //         id: '1',
    //         name: 'Protetor auricular',
    //         proxima: new Date(2020, 1, 15),
    //         buttons: <div style={{float: "right"}}>
    //         <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil}/></button>
    //         <button className="delete"><FontAwesomeIcon icon={faTrashCan}/></button>
    //     </div>
    //     },
    //     {
    //         id: '2',
    //         name: 'Óculos',
    //         proxima: new Date(2020, 1, 15),
    //         buttons: <div style={{float: "right"}}>
    //         <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil}/></button>
    //         <button className="delete"><FontAwesomeIcon icon={faTrashCan}/></button>
    //     </div>
    //     },
    //     {
    //         id: '3',
    //         name: 'Camisa manga longa',
    //         proxima: new Date(2020, 1, 15),
    //         buttons: <div style={{float: "right"}}>
    //         <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil}/></button>
    //         <button className="delete"><FontAwesomeIcon icon={faTrashCan}/></button>
    //     </div>
    //     },
    //     {
    //         id: '4',
    //         name: 'Camisa manga curta',
    //         proxima: new Date(2020, 1, 15),
    //         buttons: <div style={{float: "right"}}>
    //         <button className="edit" onClick={() => Navigate("/EditEPI")}><FontAwesomeIcon icon={faPencil}/></button>
    //         <button className="delete"><FontAwesomeIcon icon={faTrashCan}/></button>
    //     </div>
    //     }
    // ];
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

    function onPaginationChange(action, state) {
        console.log(action, state);
    }
    return (
        <>
            <Nav />
            <div className="rec">
                <Button className="new" href="NewEPI">
                    <FontAwesomeIcon icon={faPlus} />
                    novo EPI
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

export default ListagemEPI
