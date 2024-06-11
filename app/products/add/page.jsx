'use client'

import React, { useRef, useState } from 'react'
import { FaCloudArrowUp } from "react-icons/fa6";

import '../style.css'
const AddProduct = () => {
  const [file, setFile] = useState()
  const hiddenFileInput = useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    //handleFile(fileUploaded);
    setFile(URL.createObjectURL(event.target.files[0]));
    console.log(file);
  };
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

      <form action="">
        <div className="row">

          <div className="col-sm-9">
            <div className="card shadow border-0 p-4 ">
              <h4 className='fw-light mb-4'>Basic Information</h4>

              <div class="mb-3 ">
                <label htmlFor="title" className="form-label">TITLE</label>
                <input type="text" class="form-control" id="email" />
              </div>
              <div class="mb-3 ">
                <label htmlFor="longDescription" className="form-label">LONG DESCRIPTION</label>
                <textarea class="form-control" id="longDescription" rows={4} />
              </div>
              <div class="mb-3 ">
                <div className="row">
                  <div className="col-sm-6"><label htmlFor="price" className="form-label">PRICE</label>
                    <input type="number" class="form-control" id="price" defaultValue={0} /></div>
                  <div className="col-sm-6">
                    <label htmlFor="price" className="form-label">SALE PRICE</label>
                    <input type="number" class="form-control" id="price" defaultValue={0} />
                  </div>
                </div>
              </div>

              <div class="mb-3 ">
                <label htmlFor="shortDescription" className="form-label">SHORT DESCRIPTION</label>
                <textarea class="form-control" id="shortDescription" rows={2} />
              </div>
              <button className='btn btn-primary mt-3 d-flex align-items-center justify-content-center'>
                <FaCloudArrowUp className='me-3'/>PUBLISH</button>
            </div>
          </div>
          <div className="col-sm-3">
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
                    type="file"
                    onChange={handleChange} id='uploadFile'
                    ref={hiddenFileInput}
                    style={{ display: 'none' }} // Make the file input element invisible
                  />
                </div>
              }
            </div>
          </div>
        </div>

      </form>


    </div>
  )
}

export default AddProduct 