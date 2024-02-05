import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link, Outlet } from 'react-router-dom'
// import NavDropdown from 'react-bootstrap/NavDropdown';


function Dashboard() {
    return (
        <div className='fixed-top'>

            <div className='text-white bg-secondary' style={{ width: "100%", height: "50px" }}>
                <div className=''>
                    <span className='' style={{ marginLeft: "50px",fontSize:'25px'}}>tpbazar</span>
                    <span className='' style={{ marginLeft: "850px", fontSize:'25px' }}>Welcome Romel</span>

                </div>
                
            </div>

            <div>
                <div className='row flex-nowrop'>
                    <div className='col-4 col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary'>
                        <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-white min-vh-100'>

                            {/* <Link
                            to="/dashboard"
                            className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none'>
                            <i class="bi bi-cart-fill mt-"></i>
                            <span className='fs-5 fw-bolder d-none d-sm-inline'>
                            Code With Romel
                        </span>
                        </Link> */}

                            <ul
                                className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'
                                id='menu'
                            >
                                <li className='w-100'>
                                    <Link
                                        to=""
                                        className='nav-link text-white px-0 align-middle'
                                    >
                                        <i class="bi bi-houses-fill ms-2"></i>
                                        <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                                    </Link>
                                </li>
                                <br />

                                <li className='w-100'>
                                    <Link
                                        to="/dashboard/users"
                                        className='nav-link text-white px-0 align-middle'
                                    >
                                        <i class="bi bi-people ms-2"></i>
                                        <span className='ms-2 d-none d-sm-inline'>Users</span>
                                    </Link>
                                </li>
                                <br />

                                <li className='w-100'>
                                    <Link
                                        to="/dashboard/add_roles"
                                        className='nav-link text-white px-0 align-middle'
                                    >
                                        <i class="bi bi-person-rolodex ms-2"></i>
                                        <span className='ms-2 d-none d-sm-inline'>Role</span>
                                    </Link>
                                </li>
                                <br />

                                <li className='w-100'>
                                    <Link
                                        to="/dashboard/category"
                                        className='nav-link text-white px-0 align-middle'
                                    >
                                        <i class="bi bi-bag-fill ms-2"></i>
                                        <span className='ms-2 d-none d-sm-inline'>Category</span>
                                    </Link>
                                </li>
                                <br />

                                <li className='w-100'>
                                    <Link
                                        to="/dashboard/subcategory"
                                        className='nav-link text-white px-0 align-middle'
                                    >
                                        <i class="bi bi-bag-dash ms-2"></i>
                                        <span className='ms-2 d-none d-sm-inline'>Subcategory</span>
                                    </Link>
                                </li>
                                <br />

                                <li className='w-100'>
                                    <Link
                                        to="/dashboard/products"
                                        className='nav-link text-white px-0 align-middle'
                                    >
                                        <i class="bi bi-minecart ms-2"></i>
                                        <span className='ms-2 d-none d-sm-inline'>Products</span>
                                    </Link>
                                </li>
                                <br />

                                <li className='w-100'>
                                    <Link
                                        to="/dashboard/retailers"
                                        className='nav-link text-white px-0 align-middle'
                                    >
                                        <i class="bi bi-shop ms-2"></i>
                                        <span className='ms-2 d-none d-sm-inline'>Retailers</span>
                                    </Link>
                                </li>
                                <br />

                                <li className='w-100'>
                                    <Link
                                        to="/dashboard/banking"
                                        className='nav-link text-white px-0 align-middle'
                                    >
                                        <i class="bi bi-bank ms-2"></i>
                                        <span className='ms-2 d-none d-sm-inline'>Banking</span>
                                    </Link>
                                </li> <br />



                                <li className='w-100'>
                                    <Link
                                        to="/dashboard/offer"
                                        className='nav-link text-white px-0 align-middle'
                                    >
                                        <i class="bi bi-percent ms-2"></i>
                                        <span className='ms-2 d-none d-sm-inline'>Offer</span>
                                    </Link>
                                </li>
                                <br />


                                {/* <li className='w-100' onClick={hadnleLogout}>
                        <Link 
                        className='nav-link px-0 align-middle text-white'
                        >
                            <i className='fs-4 bi-power ms-2'></i>
                            <span className='ms-2 d-none d-sm-inline'>
                                Logout
                            </span>
                        </Link> 
                    </li> */}

                            </ul>

                        </div>
                    </div>
                    <div className='col-8'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard


// import React from 'react'

// function Dashboard() {
//   return (
//     <div>
//       <h1>Romel</h1>
//     </div>
//   )
// }

// export default Dashboard

