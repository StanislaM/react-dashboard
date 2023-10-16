import { GridColDef } from '@mui/x-data-grid';
import './Add.scss';

interface IProps {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = ({ slug, columns, setOpen }: IProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //add new item
    };

    return (
        <div className="add">
            <div className="modal">
                <span className="close" onClick={() => setOpen(false)}>
                    X
                </span>
                <h1>Add new {slug}</h1>
                <form onSubmit={handleSubmit}>
                    {columns
                        .filter(
                            (column) =>
                                column.field !== 'id' && column.field !== 'img'
                        )
                        .map((column) => (
                            <div className="item">
                                <label>{column.headerName}</label>
                                <input
                                    type={column.type}
                                    placeholder={column.field}
                                />
                            </div>
                        ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Add;
