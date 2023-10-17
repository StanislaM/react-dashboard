import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import './DataTable.scss';

interface IProps {
    columns: GridColDef[];
    rows: object[];
    slug: string;
}

const DataTable = ({ columns, rows, slug }: IProps) => {
    const handleDelete = (id: number) => {
        //delete the item
        console.log(id + ' has been deleted');
    };

    const actionColumn: GridColDef = {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => (
            <div className="action">
                <Link to={`/${slug}/${params.row.id}`}>
                    <img src="./view.svg" alt="view" />
                </Link>
                <div onClick={() => handleDelete(params.row.id)}>
                    <img src="./delete.svg" alt="delete" />
                </div>
            </div>
        ),
    };

    return (
        <div className="dataTable">
            <DataGrid
                className="dataGrid"
                rows={rows}
                columns={[...columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: {
                            debounceMs: 500,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    );
};

export default DataTable;
