import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './toggle.css';

function ShowUsers() {

  const [view, setView] = useState([]);

  const [search, setSearch] = useState('')

  const handleShow = () => {
    axios.get('http://localhost:5000/api/get_users')
      .then((res) => {
        console.log(res)
        setView(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    handleShow()
  }, [])

  async function activeStatus(uid) {
    let responce = await axios.put(`http://localhost:5000/api/user_status?status=active&uid=${uid}`)
    console.log(responce)
  }

  async function deactiveStatus(uid) {
    let responce = await axios.put(`http://localhost:5000/api/user_status?status=deactive&uid=${uid}`)
  }

  const filterItems = view.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ marginLeft: "50px" }}>

      <div class="form-group" style={{ width: "200px", marginTop: '30px' }} >

        <input type="search" class="form-control" id="exampleInputSearch"
          value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search with Name" />
      </div>

      <Link to='/dashboard/add_user'><button type='submit' className='btn btn-primary w-25' style={{ marginLeft: "75%" }}>
        Add User
      </button ></Link>
      <div className='table-responsive'>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">userId</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Dob</th>
              <th scope="col">Aadhar</th>
              <th scope="col">photo</th>
              <th scope="col">Doj</th>
              <th scope="col">Qualification</th>
              <th scope="col">Address</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Pin</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              filterItems.map((item) =>
                <tr>
                  <td>{item.uid}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.dob}</td>
                  <td>{item.aadhar}</td>
                  <td>{
                    <img src={`http://localhost:5000/images/${item.photo}`} alt='' style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                  }</td>
                  <td>{item.doj}</td>
                  <td>{item.qualification}</td>
                  <td>{item.address}</td>
                  <td>{item.state}</td>
                  <td>{item.city}</td>
                  <td>{item.pin}</td>
                  <td>{

                    item.status === 'deactive' ? (
                      <label class="switch">
                        <input type="checkbox" onChange={(e) => activeStatus(item.uid, e)} />
                        <span class="slider round"></span> </label>
                    )
                      :
                      (
                        <label class="switch">
                          <input type="checkbox" defaultChecked onChange={(e) => deactiveStatus(item.uid, e)} />
                          <span class="slider round"></span></label>
                      )
                  }</td>

                  <td>
                    <Link to={`/dashboard/editUser/` + item.uid}><button className='btn btn-info btn-sm me-2'>Edit </button></Link>
                  </td>

                  <td>
                    <button className='btn btn-warning btn-sm' >Delete</button>
                  </td>
                </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowUsers
