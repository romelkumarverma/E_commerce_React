import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import moment from 'moment'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddSubcategory() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () =>{
        setShow(true);
    }

    // const [subcategoryId1, setSubcategotyId1] = useState()
    // const [subcategoryname, setSubcategotyName] = useState()

    // const setValue = () =>{
    //     setSubcategotyId1(id.subcategoryid);
    //     setSubcategotyName(id.subcategoryname)
    //     handleShow()
    // }

    const [subcategoryname1, setSubcategoryname1] = useState()

    const [photo1, setPhoto1] = useState()

    const [id1, setId1] = useState()

    const [UpdatesubCategory, setUpdatesubCategory] = useState({
        subcategoryname: '',
        photo: ''
    })
 const {subcategoryid} = useParams()
    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('subcategoryname',subcategoryname1);
        formData.append('photo', photo1);

        axios.put(`http://localhost:5000/api/admin/subcategory/update/${id1}`, formData)
            .then((result) => {
                if(result.data.affectedRows===1){
                    getData()
                    handleClose()
                    alert('Data updated')
                }
                
            }).catch((err) => {
                console.log(err)
            })
    }

    const setData = (item) =>{
        setId1(item.categoryid)
        setSubcategoryname1(item.subcategoryname)
        handleShow()

    }


    const [searchdata, setSearch] = useState('');
    const [subcategory, setSubcategoty] = useState({
        categoryid: '',
        subcategoryid: '',
        subcategoryname: '',
        photo: ''
    })

    const navigate = useNavigate()
    const handleSubmit = (e) => {     
        e.preventDefault();

        const formData = new FormData();
        formData.append('categoryid', subcategory.categoryid)
        formData.append('subcategoryid', subcategory.subcategoryid)
        formData.append('subcategoryname', subcategory.subcategoryname)
        formData.append('photo', subcategory.photo);

        axios.post('http://localhost:5000/api/admin/subcategory/post', formData)
            .then((result) => {
                console.log(result);
                navigate('/dashboard/subCategory')
            }).catch((err) => {
                console.log(err)
            })
    }

    const getData = () =>{
        axios.get('http://localhost:5000/api/admin/subcategory/get')
            .then((res) => {
                setShowSubcategory(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    const [showSubcategory, setShowSubcategory] = useState([])

    useEffect(() => {
        getData()
    }, [])




    const filterItems = showSubcategory.filter((item) =>
        item.subcategoryname.toLowerCase().includes(searchdata.toLowerCase())
    )


    return (

        <div className='d-flex justify-content-center aligns-items-center' style={{ marginTop: "50px", marginLeft: "50px" }}>
            <div className='p-3 rounded border' style={{ width: "300px" }}>
                <form className='row g-1' onSubmit={handleSubmit}>

                    <div className='col-12'>
                        <label htmlFor="inputId" className='form-label'>
                            Category Id
                        </label>
                        <input type="text"
                            className='form-control rounded-0'
                            id='inputId'
                            placeholder='Enter Category Id'
                            onChange={(e) => setSubcategoty({ ...subcategory, categoryid: e.target.value })} />
                    </div>

                    <div className='col-12'>
                        <label htmlFor="inputId" className='form-label'>
                            Sub-Category Id
                        </label>
                        <input type="text"
                            className='form-control rounded-0'
                            id='inputId'
                            placeholder='Enter sub-Category Id'
                            onChange={(e) => setSubcategoty({ ...subcategory, subcategoryid: e.target.value })} />
                    </div>

                    <div className='col-12'>
                        <label htmlFor="inputName" className='form-label'>
                            SubCategory Name
                        </label>
                        <input type="text"
                            className='form-control rounded-0'
                            id='inputName'
                            placeholder='Enter subCategory Name'
                            onChange={(e) => setSubcategoty({ ...subcategory, subcategoryname: e.target.value })} />
                    </div>

                    <div className='col-12 mb-3'>
                        <label className='form-label' for='inputGroupfile01'>
                            Select Image
                        </label>
                        <input type="file"
                            className='form-control rounded-0'
                            id='inputGroupfile01'
                            onChange={(e) => setSubcategoty({ ...subcategory, photo: e.target.files[0] })} />
                    </div>


                    <div className='col-12'>
                        <button type='submit' className='btn btn-primary w-50' marginLeft='60px'>
                            Add Category
                        </button>
                    </div>


                </form>
            </div>

            {/* <div style={{marginLeft:'50px'}}>
            <input type='text' placeholder='Search item'></input>
        </div> */}


            <div style={{ marginLeft: '50px', marginTop: '50px' }}>

                <div class='form-group' style={{ width: '200px', marginLeft: '10px' }}>
                    <input type='text' class='form-control' id='exampleInputSearch'
                        value={searchdata} onChange={(e) => setSearch(e.target.value)} placeholder='Search item' />
                </div>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Categoty Id</th>
                            <th>SubCategory Id</th>
                            <th>SubCategory Name</th>
                            <th>Photo</th>
                            <th>AddedOn</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterItems.map((item) =>
                                // filterItems.map((item)=>
                                <tr>
                                    <td>{item.categoryid}</td>
                                    <td>{item.subcategoryid}</td>
                                    <td>{item.subcategoryname}</td>
                                    <td>
                                        {
                                            <img src={item.photo} alt='' style={{ width: "30px", height: "30px" }} />
                                        }
                                    </td>
                                    <td>{moment(item.Date).format("DD/MM/YYYY")}</td>
                                    <td>
                                        {/* <Link to={`/dashboard/updatesubCategory/${item.categoryid}`}><button className='btn btn-primary w-100 rounded-0 mb-2'>Edit</button></Link> */}
                                        <Button variant="primary" onClick={e => setData(item)}>
                                            Edit
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
                    <Modal.Title>Editing: {id1}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='row g-1' >

                        <div className='col-12'>
                            <label htmlFor="subcategoryId" className='form-label'>
                                SubCategory Id
                            </label>
                            <input type="text"
                                className='form-control rounded-0'
                                id='inputId'
                                value={id1}
                                
                                //onChange={e => setSubcategotyId1({ subcategoryid: e.target.value })}
                            />
                        </div>

                        <div className='col-12'>
                            <label htmlFor="subcategory" className='form-label'>
                                SubCategory Name
                            </label>
                            <input type="text"
                                className='form-control rounded-0'
                                id='subcategory'
                                placeholder={subcategoryname1}
                                // value={subcategoryname}
                                onChange={(e) => setSubcategoryname1(e.target.value)} />
                        </div>

                        <div className='col-12 mb-3'>
                            <label className='form-label' for='inputGroupfile01'>
                                Select Image
                            </label>
                            <input type="file"
                                className='form-control rounded-0'
                                id='inputGroupfile01'
                                onChange={(e) => setPhoto1(e.target.files[0])} />
                        </div>


                        {/* <div className='col-12'>
  <button className='btn btn-primary w-100 rounded-0 mb-2'>Edit Employee</button>
</div> */}

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                    <Button variant="primary" onClick={e => handleUpdate(e)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddSubcategory 