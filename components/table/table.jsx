import React from 'react'
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import './table.css'

const Table = ({ data, columns }) => {
    return (
        <>
            <div className="table-responsive " >
                <table className="table table-hover " >
                    <TableHeader columns={columns} />
                    <TableBody columns={columns} data={data} />
                </table>
            </div>
        </>
    );
}

export default Table