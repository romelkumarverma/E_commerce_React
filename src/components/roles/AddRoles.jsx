import React, { useEffect } from 'react'
// import { useState } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';

function AddRoles() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const [roleID, setRoleId] = useState()
    const [roleName, setRoleName] = useState()

    const showhandle = (role) =>{
        setRoleId(role.roleid)
        setRoleName(role.rolename)
        handleShow()
    }
    const handleShow = () =>{
       
        setShow(true);
    } 

    const [data, setData] = useState({
        roleid: '',
        rolename: ''
    })

    //////////////       form update     //////////////

    // const [rolid, setRolid] = useState({
    //     roleid: ''
    // });

    // const [role, setRole] = useState({
    //     roleid:'',
    //     rolename: ""
    // });

    const navigate = useNavigate()


    // const { roleid } = useParams()
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(roleid)
        axios.put(`http://localhost:5000/api/adminRole_update/${roleID}`, {roleID, roleName})
            .then(result => {
                console.log(result);

                if (result.data.Status) {
                    navigate('/dashboard/addRoles')
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))
    }

/////////////////////////////////////////////////////////////////////

    const handlepost = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/adminRole', data)
            .then((res) => {
                console.log(res)
                alert('Role data post Successfully...')
            }).catch((err) => {
                console.log(err)
            })
    }

    const [showdata, setShowdata] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/adminRole_get')
            .then((res) => {
                console.log(res)
                setShowdata(res.data)
            }).catch((err) => {
                console.log(err);
            }) 
    }, [])

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ marginTop: "100px" }}>
            <div className='p-3 rounded  border' style={{ width: '300px' }}>
                <form className='row g-1' onSubmit={handlepost}>

                    <div className='d-flex ' style={{ gap: "20px" }}>

                        <div style={{ marginLeft: "32px" }}>

                            <div className='col-12'>
                                <label htmlFor="inputId" className='form-label'>
                                    Role_id
                                </label>
                                <input type="text"
                                    className='form-control rounded-0'
                                    id='inputId'
                                    placeholder='Enter Role Id' onChange={(e) => setData({ ...data, roleid: e.target.value })} />
                            </div>

                            <div className='col-12'>
                                <label htmlFor="inputName" className='form-label'>
                                    Name
                                </label>
                                <input type="text"
                                    className='form-control rounded-0'
                                    id='inputName'
                                    placeholder='Enter Name' onChange={(e) => setData({ ...data, rolename: e.target.value })} />
                            </div>

                        </div>
                    </div>
                    <div className='col-12'>
                        <button type='submit' className='btn btn-primary w-50' marginLeft='60px'>
                            Add Role
                        </button>
                    </div>
                </form>
            </div>

            <div className='p-3 rounded  border' style={{ width: '300px', marginLeft: '50px', height: '200px' }}>
                <table class='table'>
                    <thead>
                        <tr>
                            <th scope="col">Role Id</th>
                            <th scope="col">Role Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showdata.map((item) =>
                                <tr>
                                    <td>{item.roleid}</td>
                                    <td>{item.rolename}</td>
                                    <td>
                                        <Button variant="primary" onClick={e => showhandle(item)}>
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
                                Role_id
                            </label>
                            <input type="text"
                                className='form-control rounded-0'
                                id='inputId'
                                placeholder={roleID}/>
                        </div>

                        <div className='col-12'>
                            <label htmlFor="inputName" className='form-label'>
                                Role Name
                            </label>
                            <input type="text"
                                className='form-control rounded-0'
                                id='inputName'
                                value={roleName}
                                placeholder='Enter Role Name' onChange={(e) => setRoleName(e.target.value)} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="primary"  type='submit' onClick={handleSubmit}>
                            Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default AddRoles;




