'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaCloudArrowUp } from "react-icons/fa6";
import '../style.css'
import { getCategories } from '@/services/categoryServices';
import { Controller, useForm } from 'react-hook-form';
import Rating from "@mui/material/Rating";
import { addProduct } from '@/services/productServices';

const AddProduct = () => {
  const {
    register,
    handleSubmit, control,
    formState: { errors },
  } = useForm()

  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [file, setFile] = useState()
  const [categories, setCategories] = useState([])
  const hiddenFileInput = useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const { ref, ...rest } = register('file', {
    onChange: (e) => { handleChange(e) },
  });
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  const initCategories = async () => {
    const result = await getCategories()
    setCategories(result)
    console.log(result);
  }
  const saveProduct = async (data) => {
    setSubmitted(true)
    const { title } = categories.find((value) => value._id === data.category)

    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("title", data.title);
    formData.append("shortDescription", data.shortDescription);
    formData.append("longDescription", data.longDescription);
    formData.append("price", data.price);
    formData.append("sale", data.sale);
    formData.append("rating", data.rating);
    formData.append("category[categoryid]", data.category);
    formData.append("category[title]", title);

    await addProduct(formData).then((response) => {
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false);
        console.log(response);
      }, 2000);
    }).finally(() => {
      setSubmitted(false)
    })
  }
  useEffect(() => {
    initCategories()
  }, [])
  const onSubmit = (data, event) => {
    event.preventDefault()
    saveProduct(data)
    console.log(data);
  }
  return (
    <div className='productSection'>
      <div className='sectionTitle d-flex align-items-center justify-content-between'>
        <h4 className='m-0'>New Product</h4>
        <div className='ms-auto '>
          <nav
            style={{ "--bs-breadcrumb-divider": "'/'" }}
            aria-label="breadcrumb">
            <ul className="breadcrumb p-0 m-0">
              <li className='breadcrumb-item'>Home</li>
              <li className='breadcrumb-item'>Product</li>
              <li className='breadcrumb-item'>New</li>
            </ul>
          </nav>
        </div>
      </div>
      {success && (
        <div className="alert alert-success " role="alert">
          Product Added Successfuly!
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">

          <div className="col-sm-9">
            <div className="card shadow border-0 p-4 ">
              <h4 className='fw-light mb-4'>Basic Information</h4>

              <div className="mb-3 ">
                <label htmlFor="title" className="form-label">TITLE</label>
                <input type="text" className="form-control" id="title" {...register('title')} />
              </div>
              <div className="mb-3 ">
                <label htmlFor="longDescription" className="form-label">LONG DESCRIPTION</label>
                <textarea className="form-control" id="longDescription" rows={4} {...register('longDescription')} />
              </div>
              <div className="mb-3 ">
                <div className="row">
                  <div className="col-sm-4"><label htmlFor="price" className="form-label">PRICE</label>
                    <input type="number" className="form-control" id="price" defaultValue={0} {...register('price')} /></div>
                  <div className="col-sm-4">
                    <label htmlFor="sale" className="form-label">SALE PRICE</label>
                    <input type="number" className="form-control" id="sale" {...register('sale')} />
                  </div>
                  <div className="col-sm-4 d-flex flex-column justify-content-between">
                    <label htmlFor="rating" className="form-label">RATING</label>
                    <Controller
                      name="rating"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Rating name="rating" {...field} precision={0.5} />
                      )}
                    />

                  </div>
                </div>
              </div>

              <div className="mb-3 ">
                <label htmlFor="shortDescription" className="form-label">SHORT DESCRIPTION</label>
                <textarea className="form-control" id="shortDescription" rows={2} {...register('shortDescription')} />
              </div>
              {!submitted ?
                <button className='btn btn-primary mt-3 d-flex align-items-center justify-content-center' type='submit'>
                  <FaCloudArrowUp className='me-3' />PUBLISH</button> :

                <button className="btn btn-primary" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                  <span role="status">Loading...</span>
                </button>

              }
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="featuredImgWrapper card shadow border-0 p-3 position-relative">
              <h4 className='fw-light mb-4'>Featured Image</h4>
              {file ? <div className="featuredImg">
                <img src={file} />
                <button className='btn text-danger p-0 mt-3' type='button' onClick={() => {
                  setFile('')
                }}>Remove product image</button>
              </div> :
                <div>
                  <button className="uploadImage" onClick={handleClick} type='button'>
                    Upload Image
                  </button>
                  <input
                    {...rest}
                    type="file"
                    style={{ display: 'none' }}
                    ref={(e) => {
                      ref(e)
                      hiddenFileInput.current = e; // This ensures the ref is set correctly
                    }}
                  />
                </div>
              }
            </div>
            <div className="categoryWrapper mt-3 card shadow border-0 p-3 position-relative">
              <h4 className='fw-light mb-4'>Choose Category</h4>
              <select className="form-select mb-3" defaultValue={'default'} {...register("category")}>
                <option value={"default"} disabled>Choose Category</option>
                {
                  categories.length > 0 ?
                    categories.map((category) => {
                      return <option value={category._id} key={category._id}>{category.title}</option>
                    })
                    : ''
                }
              </select>
              <div className="mb-4">
                <label htmlFor="tags" className="form-label">TAGS</label>
                <input type="text" className="form-control" id="tags" {...register('tags')} />
              </div>
            </div>
          </div>
        </div>

      </form >


    </div >
  )
}

export default AddProduct 