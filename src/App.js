import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Users from './components/users/Users';
import AddUser from './components/users/AddUser';
import ShowUsers from './components/users/ShowUsers';
import EditUser from './components/users/EditUser';
import AddRoles from './components/roles/AddRoles';
import Category from './components/category/AddCategory'
import Subcategory from './components/subCategory/AddSubcategory'
import Offer from './components/offer/Offer';
//import UpdatesubCategory from './components/subCategory/UpdatesubCategory';

//import Navb from './components/Navb';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/dashboard' element={<Dashboard />} > 
      <Route path='/dashboard' element={<Home />}></Route>
      <Route path='/dashboard/users' element={<ShowUsers />}></Route>
      <Route path='/dashboard/add_user' element={<AddUser />}></Route>
      <Route path='/dashboard/ShowUser' element={<Users />}></Route>
      <Route path='/dashboard/EditUser/:uid' element={<EditUser />}></Route>
      <Route path='/dashboard/add_roles' element={<AddRoles />}></Route>
      <Route path='/dashboard/category' element={<Category />}></Route>
      <Route path='/dashboard/subcategory' element={<Subcategory />}></Route>
      <Route path='/dashboard/offer' element={<Offer />}></Route>
      {/* <Route path='/dashboard/updatesubCategory/:categoryid' element={<UpdatesubCategory />}></Route> */}
    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
