// import React, { useState } from 'react'

// function UpdatesubCategory() {

//   const [UpdatesubCategoryid, setUpdatesubCategoryid] = useState({
//     subcategoryid: ''
//   })

//   const [UpdatesubCategory, setUpdatesubCategory] = useState({
//     subcategoryname: '',
//     photo: ''
//   })

//   return (
//     <div className='d-flex justify-content-center align-items-center mt-3'>
//       <div className='p-3 rounded w-50 border'>

//         <h3 className='text-center'>Edit Employee</h3>

        // <form className='row g-1'>

        //   <div className='col-12'>
        //     <label htmlFor="subcategoryId" className='form-label'>
        //       SubCategory Id
        //     </label>
        //     <input type="text"
        //       className='form-control rounded-0'
        //       id='inputId'  
        //       disabled
        //       // value={subcategoryid}
        //       onChange={e => setUpdatesubCategoryid({ subcategoryid: e.target.value })}
        //     />
        //   </div>

        //   <div className='col-12'>
        //     <label htmlFor="subcategory" className='form-label'>
        //       SubCategory Name
        //     </label>
        //     <input type="text"
        //       className='form-control rounded-0'
        //       id='subcategory'
        //       placeholder='Enter SubCategory Name'
        //       onChange={(e) => setUpdatesubCategory({ ...UpdatesubCategory, subcategoryname: e.target.value })} />
        //   </div>

        //   <div className='col-12 mb-3'>
        //     <label className='form-label' for='inputGroupfile01'>
        //       Select Image
        //     </label>
        //     <input type="file"
        //       className='form-control rounded-0'
        //       id='inputGroupfile01'
        //       onChange={(e) => setUpdatesubCategory({ ...UpdatesubCategory, photo: e.target.file[0] })} />
        //   </div>


        //   <div className='col-12'>
        //     <button className='btn btn-primary w-100 rounded-0 mb-2'>Edit Employee</button>
        //   </div>

        // </form>
//       </div>
//     </div>
//   )
// }

// export default UpdatesubCategory