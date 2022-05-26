import React from 'react';

const Blogs = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10'>
        <div>
          <img
            src='https://www.xenonstack.com/hubfs/xenonstack-optimizing-react-application.png'
            alt=''
          />
        </div>
        <div className='flex items-center'>
          <ul>
            <h1 className='text-xl font-bold'>
              How will you improve the performance of a React Application?
            </h1>
            <li>Use React.Fragment to Avoid Adding Extra Nodes to the DOM</li>
            <li>Use Production Build</li>
            <li>
              Use React.Suspense and React.Lazy for Lazy Loading Components
            </li>
            <li>Use React.memo for Component Memoization</li>
            <li>Virtualize a Large List Using react-window</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
