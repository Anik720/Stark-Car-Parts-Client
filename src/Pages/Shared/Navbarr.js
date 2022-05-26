import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbarr = () => {
  const [user, loadingg, errorr] = useAuthState(auth);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  console.log(user);
  if (loadingg) {
    return (
      <div class='flex items-center justify-center '>
        <div class='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
      </div>
    );
  }
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      {/* <div class='navbar bg-base-100'>
        <div class='flex-1'>
          <Link to='/'>Home</Link>
          <Link to='/blogs' className='pl-10'>
            Blogs
          </Link>
        </div>

        <div class='flex-none'>
          <ul class='menu menu-horizontal p-0'>
            <li>
              {user ? (
                <button class='btn text-white' onClick={logout}>
                  Log Out
                </button>
              ) : (
                <Link to='/login'>
                  <button class='btn'>Login</button>
                </Link>
              )}
            </li>

            <li>{user && <h6>{user.displayName}</h6>}</li>
            <li>
              {user && (
                <Link to='/dashboard'>
                  <h6>Dashboard</h6>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div> */}

      {/*  */}

      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3 text-white'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link to='/'>Stark Car Parts</Link>
            <Link to='/blogs' className='pl-10'>
              Blogs
            </Link>
            <Link to='/portfolio' className='pl-10'>
              My Portfolio
            </Link>
            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'>
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto items-center '>
              <li className='pr-5'>{user && <h6>{user.displayName}</h6>}</li>
              <li className='pr-5'>
                {user && (
                  <Link to='/dashboard'>
                    <h6>Dashboard</h6>
                  </Link>
                )}
              </li>

              <li>
                {user ? (
                  <button class='btn text-white' onClick={logout}>
                    Log Out
                  </button>
                ) : (
                  <Link to='/login'>
                    <button class='btn'>Login</button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbarr;
