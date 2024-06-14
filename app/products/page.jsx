'use client'
import Table from '@/components/table/table'
import { getproducts } from '@/services/productServices';
import { Rating, TablePagination } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { paginate } from '@/utiliti/paginate';
import './style.css'

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    const filtered = paginate(products, newPage, rowsPerPage)
    setFilteredProducts(filtered)
  };

  const handleChangeRowsPerPage = (event) => {
    const rows = parseInt(event.target.value)
    setRowsPerPage(rows);
    setPage(0);
    const filtered = paginate(products, 0, rows)
    setFilteredProducts(filtered)
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
      key: 'featuredImage',
      label: 'Image',
      content: (item) => (
        <div className='imgWrapper'>
          <img src={item.featuredImage !== "" ? item.featuredImage : '/images/productIcon.png'} alt="" />
        </div>
      ),
    },

    {
      key: "title", label: "Title",
      content: (item) => (
        <p>{item.title.length > 22 ? item.title.substr(0, 15) + "..." : item.title}</p>
      ),
    },
    { key: "price", label: "Price" },
    { key: "sale", label: "Sale" },
    { key: "category.title", label: "Category" },
    {
      key: "rating",
      label: "Rating",
      content: (item) => (
        <Rating name="rating" value={item.rating} precision={0.5} readOnly className='m-0' key={item._id} />
      ),
    },
    {
      key: "_id",
      label: "Edit",
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
  const initProducts = async () => {
    const result = await getproducts()
    setProducts(result)
    console.log(result.length);
    const filtered = paginate(result, page, rowsPerPage)
    setFilteredProducts(filtered)
    console.log(result);
  }
  useEffect(() => {
    initProducts()
  }, [])
  return (
    <div className='productSection'>
      <div className='sectionTitle d-flex align-items-center justify-content-between'>
        <h4 className='m-0'>Product List</h4>
        <div className='ms-auto '>
          <nav
            style={{ "--bs-breadcrumb-divider": "'/'" }}
            aria-label="breadcrumb">
            <ul className="breadcrumb p-0 m-0">
              <li className='breadcrumb-item'>Home</li>
              <li className='breadcrumb-item'>Product</li>
              <li className='breadcrumb-item'>All</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="tableWrapper card shadow border-0 p-4 ">
        <div className="row mb-3">
          <div className="col-sm-3">
            <div className="">
              <label htmlFor="showby" className='form-label'>Show By</label>
              <select className="form-select" aria-label="Default select example" id='showby'>
                <option selected>Choose Rows</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="">
              <label htmlFor="showby" className='form-label'>Show By</label>
              <select className="form-select" aria-label="Default select example" id='showby'>
                <option selected>Choose Rows</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="">
              <label htmlFor="showby" className='form-label'>Show By</label>
              <select className="form-select" aria-label="Default select example" id='showby'>
                <option selected>Choose Rows</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="">
              <label htmlFor="showby" className='form-label'>Show By</label>
              <select className="form-select" aria-label="Default select example" id='showby'>
                <option selected>Choose Rows</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

        </div>
        <Table columns={columns} data={filteredProducts} />
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

export default ProductsPage