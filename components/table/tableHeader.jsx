import React from 'react'

const TableHeader = ({ columns }) => {
    return (
        <thead >
            <tr >
                {columns.map((column) => (
                    <th className="p-2 pt-3 pb-3 ps-3 " scope="col" key={column.key}>
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default TableHeader