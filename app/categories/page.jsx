'use client'
import Table from '@/components/table/table'
import { Rating, TablePagination } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { paginate } from '@/utiliti/paginate';
import { getCategories } from '@/services/categoryServices';
import './style.css'

const CategoriesPage = () => {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [categories, setCategories] = useState([])
    const [filteredCategories, setFilteredCategories] = useState([])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        const filtered = paginate(categories, newPage, rowsPerPage)
        setFilteredCategories(filtered)
    };

    const handleChangeRowsPerPage = (event) => {
        const rows = parseInt(event.target.value)
        setRowsPerPage(rows);
        setPage(0);
        const filtered = paginate(categories, 0, rows)
        setFilteredCategories(filtered)
    };

    const columns = [
        {
            key: "select",
            label: <div className='checkboxWrapper'>
                <input class="checkbox" type="checkbox" value="" id="flexCheckDefault" />
            </div>,
            content: (item) => (
                <div className='checkboxWrapper'>
                    <input class="checkbox" type="checkbox" value="" id="flexCheckDefault" />
                </div>
            ),
        },
        {
            key: 'imageUrl',
            label: 'Image',
            content: (item) => (
                <div className='imgWrapper'>
                    <img src={item.imageUrl !== "" ? item.imageUrl : '/images/productIcon.png'} alt="" />
                </div>
            ),
        },

        {
            key: "title", label: "Title",
            content: (item) => (
                <p>{item.title.length > 22 ? item.title.substr(0, 15) + "..." : item.title}</p>
            ),
        },

        {
            key: "description", label: "Description",
            content: (item) => (
                <p>{item.description.length > 22 ? item.description.substr(0, 45) + "..." : item.description}</p>
            ),
        },

        {
            key: "_id", label: "Edit",
            content: (item) => (
                <Link href={`/balances/edit/${item._id}`}>
                    <button className="btn btn-primary"> edit</button>
                </Link>
            ),
        },

        {
            key: "id",
            label: "Delete",
            content: (item) => <button className="btn btn-danger"> delete</button>,
        },
    ];
    const initcategories = async () => {
        const result = await getCategories()
        setCategories(result)
        const filtered = paginate(result, page, rowsPerPage)
        setFilteredCategories(filtered)
        console.log(result);
    }
    useEffect(() => {
        initcategories()
    }, [])
    return (
        <div className='categoriesection'>
            <div className='sectionTitle d-flex align-items-center justify-content-between'>
                <h4 className='m-0'>Category List</h4>
                <div className='ms-auto '>
                    <nav
                        style={{ "--bs-breadcrumb-divider": "'/'" }}
                        aria-label="breadcrumb">
                        <ul className="breadcrumb p-0 m-0">
                            <li className='breadcrumb-item'>Home</li>
                            <li className='breadcrumb-item'>Category</li>
                            <li className='breadcrumb-item'>All</li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="tableWrapper card shadow border-0 p-4 ">
                <Table columns={columns} data={filteredCategories} />
                <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </div >
    )
}

export default CategoriesPage