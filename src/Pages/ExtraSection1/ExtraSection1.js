import React from 'react';
import './ExtraSection1.css';
const ExtraSection1 = () => {
  return (
    <div>
      <h1 className='text-center my-20'>NEW ARRIVALS</h1>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5 gap-x-12'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5 gap-x-1.5 '>
          <div>
            <div
              class='card w-full lg:w-80 bg-base-100 shadow-xl image-full'
              data-aos='zoom-in'
              data-aos-duration='3000'>
              <figure>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1llR4s_oSpQVk7ZiqcupZYJB8dn12IO_6Q&usqp=CAU'
                  alt='Shoes'
                />
              </figure>
              <div class='card-body'>
                <h2 class='card-title'>Wheels!</h2>

                <div class='card-actions justify-end'>
                  <button class='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              class='card w-full lg:w-80  bg-base-100 shadow-xl image-full'
              data-aos='zoom-in'
              data-aos-duration='3000'>
              <figure>
                <img
                  src='https://media.istockphoto.com/photos/car-engine-parts-picture-id1212230930?b=1&k=20&m=1212230930&s=170667a&w=0&h=vXlR5XiFnd8aysfbaVTGFIbDhuhRAOrnwJ9TmIIIC5E='
                  alt='Shoes'
                />
              </figure>
              <div class='card-body'>
                <h2 class='card-title'>Engine Parts!</h2>

                <div class='card-actions justify-end'>
                  <button class='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              class='card w-full lg:w-80  bg-base-100 shadow-xl image-full'
              data-aos='zoom-in'
              data-aos-duration='3000'>
              <figure>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltmjRA11VIr-e4mtkFEFvXbIhBT28urLVmg&usqp=CAU'
                  alt='Shoes'
                />
              </figure>
              <div class='card-body'>
                <h2 class='card-title'>Pistons</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class='card-actions justify-end'>
                  <button class='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              class='card w-full lg:w-80   bg-base-100 shadow-xl image-full'
              data-aos='zoom-in'
              data-aos-duration='3000'>
              <figure>
                <img
                  src='http://cat-img.auto-vision.ru/dc3_accum/ea5d79aa0cb5e374e95832c828dc7e9d.jpg'
                  alt='Shoes'
                />
              </figure>
              <div class='card-body'>
                <h2 class='card-title'>Battery!</h2>

                <div class='card-actions justify-end'>
                  <button class='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class='card w-full  bg-base-100 shadow-xl'
          data-aos='zoom-in'
          data-aos-duration='3000'>
          <figure>
            <img
              src='https://media.istockphoto.com/photos/car-engine-picture-id182145763?k=20&m=182145763&s=612x612&w=0&h=uWx57fWuceDuAMHU4AFQsYdPeVM007kZBzPkd_aT7xU='
              alt='Shoes'
            />
          </figure>
          <div class='card-body'>
            <h2 class='card-title'>
              Powerfull Engines
              <div class='badge badge-secondary'>NEW</div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection1;
