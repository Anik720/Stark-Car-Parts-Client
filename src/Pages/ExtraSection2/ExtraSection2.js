import React from 'react';

const ExtraSection2 = () => {
  return (
    <div className='mt-40'>
      <h1 className='text-center font-bold text-xl mb-10'>Our Clients</h1>

      <div className='flex items-center justify-center'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-5'>
          <div
            class='card w-72  bg-base-100 shadow-xl'
            data-aos='zoom-in'
            data-aos-duration='3000'>
            <div class='card-body'>
              <h2 class='card-title'>Audi</h2>
              <p>Our partnership scince 1999</p>

              <img
                src='https://www.carlogos.org/car-logos/audi-logo.png'
                alt=''
              />
            </div>
          </div>

          <div
            class='card w-72  bg-base-100 shadow-xl'
            data-aos='zoom-in'
            data-aos-duration='3000'>
            <div class='card-body'>
              <h2 class='card-title'>Toyota</h2>
              <p>Our partnership scince 1999</p>

              <img
                src='https://www.carlogos.org/car-logos/toyota-logo.png'
                alt=''
              />
            </div>
          </div>
          <div
            class='card w-72  bg-base-100 shadow-xl'
            data-aos='zoom-in'
            data-aos-duration='3000'>
            <div class='card-body'>
              <h2 class='card-title'>Lamborgini</h2>
              <p>Our partnership scince 1999</p>

              <img
                src='https://www.carlogos.org/car-logos/lamborghini-logo.png'
                alt=''
              />
            </div>
          </div>
          <div
            class='card w-72  bg-base-100 shadow-xl'
            data-aos='zoom-in'
            data-aos-duration='3000'>
            <div class='card-body'>
              <h2 class='card-title'>Bugatti</h2>
              <p>Our partnership scince 1999</p>

              <img
                src='https://www.carlogos.org/car-logos/bugatti-logo.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection2;
