import React from 'react'
import { Link } from 'react-router-dom'

function Add_Employee() {
  return (
    <div className='px-5 mt-3'>
        <div>
            <h3>User List</h3>
        </div>
        <Link to="/dashboard/add_user" className='btn btn-success'>
          Add User
        </Link>
        <div className='mt-3'></div>
    </div>
  )
}

export default Add_Employee

