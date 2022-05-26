import logo from './logo.svg';
import './App.css';
import Navbarr from './Pages/Shared/Navbarr';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Payment from './Pages/Dashboard/Payment/Payment';
import User from './Pages/Dashboard/User/User';
import AddAProduct from './Pages/Dashboard/AddAProduct/AddAProduct';
import Manageproduct from './Pages/Dashboard/Manageproduct/Manageproduct';
import Updateprofile from './Pages/Dashboard/MyProfile/Updateprofile';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';
import NotFound from './Pages/NotFound/NotFound';
import RequireAdmin from './Pages/RequireAuth/RequireAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=''>
      <Navbarr></Navbarr>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route
          path='/purchase/:id'
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route
          path='updateprofile'
          element={<Updateprofile></Updateprofile>}></Route>
        <Route
          path='dashboard'
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route
            path='users'
            element={
              <RequireAdmin>
                <User></User>
              </RequireAdmin>
            }></Route>
          <Route
            path='manageproducts'
            element={
              <RequireAdmin>
                <Manageproduct></Manageproduct>
              </RequireAdmin>
            }></Route>
          <Route
            path='manageorders'
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }></Route>
          <Route
            path='addproduct'
            element={
              <RequireAdmin>
                <AddAProduct></AddAProduct>
              </RequireAdmin>
            }></Route>
          <Route
            path='updateprofile'
            element={<Updateprofile></Updateprofile>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
