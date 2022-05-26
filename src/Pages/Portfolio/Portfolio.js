import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5'>
        <div>
          <img
            src='https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/83969373_2590559897728398_5766788992758448128_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGnn1TeugxRKYcka651EI3ziM3p2j98oQWIzenaP3yhBbx_FmtmAplvHiId2FpLg08mOhqdBls5AtzAXqjGdcd2&_nc_ohc=fXea4teZiKQAX-jhfeq&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_cdFgLw6hBKx7DBL-HaUqYPOpQJkd9b9-2N9jdTqx7Bg&oe=62B43CFE'
            alt=''
          />
        </div>
        <div>
          <h1 className='text-xl font-bold'>
            Hello! Here is a short overview of mine.
          </h1>
          <h1 className='text-xl font-bold'>Name: Golam Kibria Anik</h1>
          <h1 className='text-xl font-bold'>Email: Golam.anik192@gmail.com</h1>
          <h1 className='text-xl font-bold'>
            Educational Background: Bsc in CSE from North South University
          </h1>
          <h1 className='text-xl font-bold'>Skilss</h1>
          <ul style={{ listStyleType: 'square' }} className='ml-10'>
            <li>Html</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>TailwindCss</li>
            <li>React Bootstrap</li>
            <li>DaisyUI</li>
            <li>React</li>
            <li>Nodejs</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
