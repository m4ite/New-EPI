import Nav from "../../components/nav"
import Footer from "../../components/footer"

import styles from "./style.module.css"

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";

function HistoricoSolicitacoes(){

    const nodes = [
        {
            id: '0',
            name: 'Luva de Latex',
            ultima: new Date(2020, 1, 15),
            proxima: new Date(2020, 1, 15),
            local: "Ct401"
        },
        {
            id: '1',
            name: 'Protetor auricular',
            ultima: new Date(2020, 1, 15),
            proxima: new Date(2020, 1, 15),
            local: "Ct401"
        },
        {
            id: '2',
            name: 'Óculos',
            ultima: new Date(2020, 1, 15),
            proxima: new Date(2020, 1, 15),
            local: "Ct401"
        },
        {
            id: '3',
            name: 'Camisa manga longa',
            ultima: new Date(2020, 1, 15),
            proxima: new Date(2020, 1, 15),
            local: "Ct401"
        },
        {
            id: '4',
            name: 'Camisa manga curta',
            ultima: new Date(2020, 1, 15),
            proxima: new Date(2020, 1, 15),
            local: "Ct401"
        }
    ];
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
        {
            label: 'Ultima Retirada', renderCell: (item) =>
                item.ultima.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', })
        },
        { label: 'Item', renderCell: (item) => item.name },
        {
            label: 'Proxima Retirada', renderCell: (item) =>
                item.proxima.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', }),
        },
        { label: 'Local', renderCell: (item) => item.local },
    ];

    
    return(
        <>
            <Nav/>
            <Footer/>
        </>
    )
}

export default HistoricoSolicitacoes