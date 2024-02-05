import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function AddUser() {

  const [users, setUsers] = useState({
    uid: '',
    name: '',
    email: '',
    password: '',
    mobile: '',
    photo: '',
    aadhar: '',
    doj: '',
    dob: '',
    qualification: '',
    address: '',
    state: '',
    city: '',
    pin: ''
  })
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    console.log(users)
    e.preventDefault()
    const formData = new FormData()
    formData.append("uid", users.uid)
    formData.append("name", users.name)
    formData.append("email", users.email)
    formData.append("password", users.password)
    formData.append("mobile", users.mobile)
    formData.append("photo", users.photo)
    formData.append("aadhar", users.aadhar)
    formData.append("doj", users.doj)
    formData.append("dob", users.dob)
    formData.append("qualification", users.qualification)
    formData.append("address", users.address)
    formData.append("state", users.state)
    formData.append("city", users.city)
    formData.append("pin", users.pin)

    axios.post('http://localhost:5000/api/add/users', formData)
      .then((result) => {
        console.log(result)
        navigate('/dashboard/users')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex justify-content-center align-items-center mt-3' style={{ marginLeft: "150px" }}>
      <div className='p-3 rounded w-100 border'>
        <h2 className='text-center'>Add User</h2>
        <hr />

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
                  placeholder='Enter Id'
                  onChange={(e) => setUsers({ ...users, uid: e.target.value })} />
              </div>

              <div className='col-12'>
                <label htmlFor="inputName" className='form-label'>
                  Name
                </label>
                <input type="text"
                  className='form-control rounded-0'
                  id='inputName'
                  placeholder='Enter Name'
                  onChange={(e) => setUsers({ ...users, name: e.target.value })} />
              </div>

              <div className='col-12'>
                <label htmlFor="email" className='form-label'>
                  Email
                </label>
                <input type="inputEmail"
                  className='form-control rounded-0'
                  id='email'
                  placeholder='Enter Email'
                  onChange={(e) => setUsers({ ...users, email: e.target.value })} />
              </div>

              <div className='col-12'>
                <label htmlFor="inputPassword" className='form-label'>
                  Password
                </label>
                <input type="password"
                  className='form-control rounded-0'
                  id='password'
                  placeholder='Enter Password'
                  onChange={(e) => setUsers({ ...users, password: e.target.value })} />
              </div>

              <div className='col-12'>
                <label htmlFor="inputMobile" className='form-label'>
                  Mobile
                </label>
                <input type="text"
                  className='form-control rounded-0'
                  id='inputMobile'
                  placeholder='Enter Mobile'
                  onChange={(e) => setUsers({ ...users, mobile: e.target.value })} />
              </div>
            </div>

            <div>
              <div className='col-12 mb-3'>
                <label className='form-label' for='inputGroupfile01'>
                  Select Image
                </label>
                <input type="file"
                  className='form-control rounded-0'
                  id='inputGroupfile01'
                  onChange={(e) => setUsers({ ...users, photo: e.target.files[0] })}
                />
              </div>

              <div className='col-12'>
                <label htmlFor="inputAadhar" className='form-label'>
                  Aadhar
                </label>
                <input type="text"
                  className='form-control rounded-0'
                  id='inputAadhar'
                  placeholder='Enter Aadhar Number'
                  onChange={(e) => setUsers({ ...users, aadhar: e.target.value })} />
              </div>

              <div className='col-12'>
                <label htmlFor="inputDoj" className='form-label'>
                  DOJ
                </label>
                <input type="text"
                  className='form-control rounded-0'
                  id='inputDoj'
                  placeholder='Enter Date of joining'
                  onChange={(e) => setUsers({ ...users, doj: e.target.value })} />
              </div>

              <div className='col-12'>
                <label htmlFor="inputQualification" className='form-label'>
                  Qualification
                </label>
                <input type="text"
                  className='form-control rounded-0'
                  id='inputQualification'
                  placeholder='Enter Qualification'
                  onChange={(e) => setUsers({ ...users, qualification: e.target.value })} />
              </div>

              <div className='col-12'>
                <label htmlFor="inputAddress" className='form-label'>
                  Address
                </label>
                <input type="text"
                  className='form-control rounded-0'
                  id='inputAddress'
                  placeholder='Enter Address'
                  onChange={(e) => setUsers({ ...users, address: e.target.value })} />
              </div>
            </div>

            <div>
              <div className='col-12'>
                <label htmlFor="inputState" className='form-label'>
                  State
                </label>
                <input type="text"
                  className='form-control rounded-0'
                  id='inputState'
                  placeholder='Enter State'
                  onChange={(e) => setUsers({ ...users, state: e.target.value })} />
              </div>

              <div className='col-12'>
                <label htmlFor="inputCity" className='form-label'>
                  City
                </label>
                <input type="text"
                  className='form-control rounded-0'
                  id='inputCity'
                  placeholder='Enter City'
                  onChange={(e) => setUsers({ ...users, city: e.target.value })} />
              </div>

              <div className='col-12'>
                <label htmlFor="inputPin" className='form-label'>
                  Pin
                </label>
                <input type="text"
                  className='form-control rounded-0'
                  id='inputPin'
                  placeholder='Enter Pin'
                  onChange={(e) => setUsers({ ...users, pin: e.target.value })} />
              </div>

              <div className='col-12'>
                <label htmlFor="inputDoB" className='form-label'>
                  DOB
                </label>
                <input type="text"
                  className='form-control rounded-0'
                  id='inputDoB'
                  placeholder='Enter Date of Birth'
                  onChange={(e) => setUsers({ ...users, dob: e.target.value })} />
              </div>
            </div>
          </div>

          <div className='col-12'>
            <button type='submit' className='btn btn-primary w-100'>
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser
