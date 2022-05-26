import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummery = () => {
  return (
    <div className='mt-20 flex justify-center  bg-gradient-to-r from-slate-500 to-white-100'>
      <div>
        <h1 className='text-center text-xl font-bold mb-20'>
          Business Summary
        </h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-20'>
          <div>
            <h1>Annual revenue</h1>
            <h1 className='text-xl font-bold'>250M+</h1>
            <i
              class='fa-solid fa fa-dollar-sign'
              style={{ fontSize: '30px', color: 'red' }}></i>
          </div>
          <div>
            <h1>Feedbacks</h1>
            <h1 className='text-xl font-bold'>750+</h1>
            <i
              class='fa-solid fa fa-balance-scale'
              style={{ fontSize: '30px', color: 'red' }}></i>
          </div>
          <div>
            <h1>Clients</h1>
            <h1 className='text-xl font-bold'>950+</h1>
            <i
              class='fa fa-user-friends'
              style={{ fontSize: '30px', color: 'red' }}></i>
          </div>
          <div>
            <h1>Coutries</h1>
            <h1 className='text-xl font-bold'>480+</h1>
            <i
              class='fa fa-flag'
              style={{ fontSize: '30px', color: 'red' }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
