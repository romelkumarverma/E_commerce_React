import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditUser = () => {

    const [id, setUid] = useState({
        uid:'',
    })
    const [user, setUser] = useState({
        // uid: "",
        name: "",
        email: "",
        mobile: "",
        state: "",
        city: "",
        pin: "",
        // salary: "",
        address: "",
    });

    const navigate = useNavigate()


    // axios.get('http://localhost:5000/user/' + id)
    //     .then(result => {
    //         setUser({
    //             ...user,
    //             name: result.data.Result[0].name,
    //             email: result.data.Result[0].email,
    //             mobile: result.data.Result[0].mobile,
    //             state: result.data.Result[0].state,
    //             city: result.data.Result[0].city,
    //             pin: result.data.Result[0].pin,
    //             address: result.data.Result[0].address,
    //             salary: result.data.Result[0].salary,
    //         })
    //     }).catch(err => console.log(err))
    const { uid } = useParams()
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:5000/api/update_users/${uid}`, user)
            .then(result => {
                console.log(result);

                if (result.data.Status) {
                    navigate('/dashboard/showUsers')
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))
    }


    return (
        <div className='d-flex justify-content-center align-items-center mt-3'>
            <div className='p-3 rounded w-50 border'>

                <h3 className='text-center'>Edit Employee</h3>

                <form className='row g-1' onSubmit={handleSubmit}>

                    <div className='d-flex ' style={{ gap: "20px" }}>

                        <div style={{ marginLeft: "32px" }}>

                            <div className='col-12'>
                                <label htmlFor="inputId" className='form-label'>
                                    User_id
                                </label>
                                <input type="text"
                                    className='form-control rounded-0'
                                    id='inputId'
                                    disabled
                                    value={uid}
                                    onChange={e => setUid({uid:e.target.value})}
                                  />
                            </div>

                            <div className='col-12'>
                                <label For="inputName" className='form-label'>
                                    Name
                                </label>
                                <input type='text' className='form-control rounded-0'
                                    id='inputName'
                                    placeholder='Enter Name'
                                    value={user.name}
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                />
                            </div>

                            <div className='col-12'>
                                <label For="inputEmail" className='form-label'>
                                    Email
                                </label>
                                <input type='email' className='form-control rounded-0'
                                    id='inputEmail'
                                    placeholder='Enter Email'
                                    autoComplete='off'
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                />
                            </div>

                            <div className='col-12'>
                                <label htmlFor="inputMobile" className='form-label'>
                                    Mobile
                                </label>
                                <input type="text"
                                    className='form-control rounded-0'
                                    id='inputMobile'
                                    placeholder='Enter Mobile'
                                    onChange={(e) => setUser({ ...user, mobile: e.target.value })} />
                            </div>

                            <div className='col-12'>
                                <label htmlFor="inputState" className='form-label'>
                                    State
                                </label>
                                <input type="text"
                                    className='form-control rounded-0'
                                    id='inputState'
                                    placeholder='Enter State'
                                    onChange={(e) => setUser({ ...user, state: e.target.value })} />
                            </div>
                        </div>

                        <div style={{ marginLeft: "32px" }}>

                            <div className='col-12'>
                                <label htmlFor="inputCity" className='form-label'>
                                    City
                                </label>
                                <input type="text"
                                    className='form-control rounded-0'
                                    id='inputCity'
                                    placeholder='Enter City'
                                    onChange={(e) => setUser({ ...user, city: e.target.value })} />
                            </div>

                            <div className='col-12'>
                                <label htmlFor="inputPin" className='form-label'>
                                    Pin
                                </label>
                                <input type="text"
                                    className='form-control rounded-0'
                                    id='inputPin'
                                    placeholder='Enter Pin'
                                    onChange={(e) => setUser({ ...user, pin: e.target.value })} />
                            </div>

                            {/* <div className='col-12'>
                                <label For="inputSalary" className='form-label'>
                                    Salary
                                </label>
                                <input type='text' className='form-control rounded-0'
                                    id='inputSalary'
                                    placeholder='Enter Salary'
                                    autoComplete='off'
                                    value={user.salary}
                                    onChange={(e) => setUser({ ...user, salary: e.target.value })}
                                />
                            </div> */}

                            <div className='col-12'>
                                <label For="inputAddress" className='form-label'>
                                    Address
                                </label>
                                <input type='text' className='form-control rounded-0'
                                    id='inputAddress'
                                    placeholder='1234 Main St'
                                    autoComplete='off'
                                    value={user.address}
                                    onChange={(e) => setUser({ ...user, address: e.target.value })}
                                />
                            </div>
                        </div>
                        {/*   
                      <div className='col-12'>
                          <label For="category" className='form-label'>
                              category
                          </label>
                          <select
                              // onChange={(e) => setId(e.target.value )}>
                              onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })}>
                              {
                                  category.map((c) => {
                                      // return <option key={index + 1} value={c.id}>{c.name}</option>
                                      return <option value={c.id}>{c.name}</option>
                                  })}
                          </select>
                      </div> */}

                    </div>

                    <div className='col-12'>
                        <button className='btn btn-primary w-100 rounded-0 mb-2'>Edit Employee</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default EditUser
