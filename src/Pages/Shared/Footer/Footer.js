import React from 'react';
import './Footer.css';
//import pic from '../../android-app-store-app-store-and-android-icons-11553546864dl6gbnzyt2.png';
const Footer = () => {
  return (
    <div
      className='bg-black text-white mt-5 sticky-bottom p-5 footer'
      id='footer '>
      <div className='mt-5 '>
        <p className=' text-light'>Copyright &copy; Golam Kibria Anik</p>
        <p className=' text-light flex items-center justify-center'>
          <i
            class='fas fa-car-side mr-2'
            style={{ fontSize: '48px', color: 'red' }}></i>
          Stark car parts
        </p>
      </div>
      <div className='mt-5 '>
        <h5 className='text-light'>Overview</h5>
        <p className=' text-light'>About Us</p>
        <p className=' text-light'>Career</p>
        <p className=' text-light'>Press</p>
        <p className=' text-light'>Contact</p>
        <p className=' text-light'>Ternms&condition</p>
        <p className=' text-light'>Privacy&policy</p>
      </div>
      <div className='mt-5 '>
        <h5 className='text-light'>Community</h5>
        <p className=' text-light'>Community Central</p>
        <p className=' text-light'>Support</p>
        <p className=' text-light'>Help</p>
        <p className=' text-light'>Do not Sell my info</p>
        <h5 className=' text-light'>Advertise</h5>
        <p className=' text-light'>Media kit</p>
        <p className=' text-light'>Contact</p>
      </div>
      <div className='mt-5 '>
        <h5 className='text-light'>Our Apps</h5>
        <h5 className='text-light'>
          <img
            src='https://templates.scriptsbundle.com/carspot/demos/images/googleplay.png'
            alt=''
          />
        </h5>
        <h5 className='text-light'>
          <img
            src='https://templates.scriptsbundle.com/carspot/demos/images/appstore.png'
            alt=''
          />
        </h5>
      </div>
    </div>
  );
};

export default Footer;
