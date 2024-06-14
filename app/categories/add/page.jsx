'use client'
import React, { useRef, useState } from 'react'
import { FaCloudArrowUp } from "react-icons/fa6";
import '../style.css'
import { useForm } from "react-hook-form"
import { addCategory } from '@/services/categoryServices';


const AddCategoryPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [success, setSuccess] = useState(false);

    const [submitted, setSubmitted] = useState(false);
    const { ref, ...rest } = register('file', {
        onChange: (e) => { handleChange(e) },
    });
    const [file, setFile] = useState()
    const [image, setImage] = useState()
    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        //handleFile(fileUploaded);
        console.log(fileUploaded);
        setFile(URL.createObjectURL(event.target.files[0]));
    };
    const saveCategory = async (data) => {

        setSubmitted(true)
        const formData = new FormData();
        formData.append("file", data.file[0]);
        formData.append("description", data.description);
        formData.append("title", data.title);

        console.log(formData);

        await addCategory(formData).then((response) => {
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false);
                console.log(response);
            }, 2000);
        }).finally(() => {
            setSubmitted(false)
        })
    }
    const onSubmit = (data, event) => {
        event.preventDefault();
        saveCategory(data)
        console.log(data);
    }


    return (
        <div className='productSection'>
            <div className='sectionTitle d-flex align-items-center justify-content-between'>
                <h4 className='m-0'>New Category</h4>
                <div className='ms-auto '>
                    <nav
                        style={{ "--bs-breadcrumb-divider": "'/'" }}
                        aria-label="breadcrumb">
                        <ul className="breadcrumb p-0 m-0">
                            <li className='breadcrumb-item'>Home</li>
                            <li className='breadcrumb-item'>Category</li>
                            <li className='breadcrumb-item'>New</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {success && (
                <div className="alert alert-success " role="alert">
                    Category Added Successfuly!
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">

                    <div className="col-sm-9">
                        <div className="card shadow border-0 p-4 ">
                            <h4 className='fw-light mb-4'>Basic Information</h4>

                            <div className="mb-3 ">
                                <label htmlFor="title" className="form-label">TITLE</label>
                                <input type="text" className="form-control" id="title" {...register("title")} />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="description" className="form-label">LONG DESCRIPTION</label>
                                <textarea className="form-control" id="description" rows={4} {...register("description")} />
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
                    </div>
                </div>

            </form>


        </div>
    )
}

export default AddCategoryPage 