import NavHome from "../../../components/navHome"
import Footer from "../../../components/footer"


import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'rsuite';

function ListagemEPI() {
    const nodes = [
        {
            id: '0',
            name: 'Luva de Latex',
            ultima: new Date(2020, 1, 15),
            proxima: new Date(2020, 1, 15)            
        },
        {
            id: '1',
            name: 'Protetor auricular',
            ultima: new Date(2020, 1, 15),
            proxima: new Date(2020, 1, 15)            
        },
        {
            id: '2',
            name: 'Óculos',
            ultima: new Date(2020, 1, 15),
            proxima: new Date(2020, 1, 15)            
        },
        {
            id: '3',
            name: 'Camisa manga longa',
            ultima: new Date(2020, 1, 15),
            proxima: new Date(2020, 1, 15),
        },
        {
            id: '4',
            name: 'Camisa manga curta',
            ultima: new Date(2020, 1, 15),
            proxima: new Date(2020, 1, 15),
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
        { label: ' ', renderCell: (item) => item.local },
    ];

    function onPaginationChange(action, state) {
        console.log(action, state);
    }
    return (
        <>
            <NavHome />
            <div className="rec">
                <Button className="new" href="NewEPI">
                    <FontAwesomeIcon icon={faPlus}/>
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
