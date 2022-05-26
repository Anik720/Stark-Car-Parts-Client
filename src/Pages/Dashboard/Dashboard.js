import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (loading || adminLoading) {
    return (
      <div class='flex items-center justify-center '>
        {/* <div class='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
         */}
        <img
          src='https://themebing.com/wp/sayara/wp-content/themes/sayara/assets/images/preloader.gif'
          alt=''
        />
      </div>
    );
  }
  return (
    <div>
      <div class='drawer drawer-mobile'>
        <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
        <div class='drawer-content'>
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          <label
            for='my-drawer-2'
            class='btn btn-primary drawer-button lg:hidden'>
            Open drawer
          </label>
        </div>
        <div class='drawer-side'>
          <label for='my-drawer-2' class='drawer-overlay'></label>
          <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
            {/* <!-- Sidebar content here --> */}
            <li>
              {(user || admin) && <Link to='/dashboard'>My Profile</Link>}
            </li>
            <li>
              {user && !admin && (
                <Link to='/dashboard/myorders'>My Orders</Link>
              )}
            </li>
            <li>
              {user && !admin && (
                <Link to='/dashboard/addreview'>Add Review</Link>
              )}
            </li>

            {admin && (
              <>
                <li>
                  <Link to='/dashboard/users'>All Users</Link>
                </li>
                <li>
                  <Link to='/dashboard/users'>Make Admin</Link>
                </li>
                <li>
                  <Link to='/dashboard/addproduct'>Add a Product</Link>
                </li>
                <li>
                  <Link to='/dashboard/manageorders'>Manage All Orders</Link>
                </li>
                <li>
                  <Link to='/dashboard/manageproducts'>Manage Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
