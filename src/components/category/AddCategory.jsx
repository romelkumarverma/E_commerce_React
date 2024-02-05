// import React, { Children, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import axios from 'axios';


function AddCategory() {
    const [showdata, setShowdata] = useState([])
    const [data, setData] = useState({
        categoryid:"",
        categoryname:""
    })

    // const [update, setUpdate] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const [categoryID, setCategoryId] = useState()
    const [categoryName, setCategoryName] = useState()

    const showhandle = (role) =>{
        setCategoryId(role.categoryid)
        setCategoryName(role.categoryname)
        handleShow()
    }
    const handleShow = () =>{
       
        setShow(true);
    } 

    const handlePost = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/admin/category/addcategory', data)
        .then((res)=>{
            console.log(res);
            alert('Data post successfully...')
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handleget = () =>{
        axios.get(`http://localhost:5000/api/admin/category`)
        .then((res)=>{
            console.log(res)
            setShowdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        handleget()
    },[])

    
    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:5000/api/admin/category/updatecategory/${categoryID}`,{categoryID,categoryName})
        .then((res)=>{
            console.log(res)
            alert("Category data update successfully...")
            handleClose();
        }).catch((err)=>{
            console.log(err)
        })
    }

    //const [showdata, setShowdata] = useState();

    return (
        <div className='d-flex justify-content-center aligns-items-center' style={{ marginTop: "50px",marginLeft:"50px" }}>
            <div className='p-3 rounded border' style={{ width: "300px" }}>
                <form className='row g-1' onSubmit={handlePost}>

                    <div className='col-12'>
                        <label htmlFor="inputId" className='form-label'>
                            Category Id
                        </label>
                        <input type="text"
                            className='form-control rounded-0'
                            id='inputId'
                            placeholder='Enter Category Id' onChange={(e)=> setData({...data,categoryid: e.target.value})}/>
                    </div>

                    <div className='col-12'>
                        <label htmlFor="inputName" className='form-label'>
                            Category Name
                        </label>
                        <input type="text"
                            className='form-control rounded-0'
                            id='inputName'
                            placeholder='Enter Category Name' onChange={(e)=> setData({...data, categoryname: e.target.value})}/>
                    </div>

                    <div className='col-12'>
                        <button type='submit' className='btn btn-primary w-50' marginLeft='60px'>
                            Add Category
                        </button>
                    </div>
                </form>
            </div>

            <div className='p-3 rounded-border' style={{width:"400px", marginLeft:"50px", height:"100px"}}>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>Category Id</th>
                                <th scope='col'>Category Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showdata.map((item)=>
                                    <tr>
                                        <td>{item.categoryid}</td>
                                        <td>{item.categoryname}</td>
                                        <td>
                                            <Button variant='primary' onClick={e => showhandle(item)}>
                                                Update 
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className='col-12'>
                            <label htmlFor="inputId" className='form-label'>
                                Category Id
                            </label>
                            <input type="text"
                                className='form-control rounded-0'
                                id='inputId'
                                placeholder='Enter category id' value={categoryID}/>
                        </div>

                        <div className='col-12'>
                            <label htmlFor="inputName" className='form-label'>
                                Category Name
                            </label>
                            <input type="text"
                                className='form-control rounded-0'
                                id='inputName'
                            
                                placeholder='Enter Role Name' value={categoryName} onChange={(e)=> setCategoryName(e.target.value)}/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="primary"  type='submit' onClick={handleUpdate} >
                            Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> 
        </div>
    )
}

export default AddCategory