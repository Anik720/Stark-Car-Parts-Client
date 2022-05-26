import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
  const [toolss, setTools] = useState([]);
  const tools = toolss.slice(-6);
  useEffect(() => {
    fetch('https://manufacturerwebsite.herokuapp.com/tools')
      .then((res) => res.json())
      .then((data) => setTools(data));
  });
  return (
    <div className='mt-20'>
      <h1 className='text-center text-xl font-bold mb-10'>Tools</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-20 '>
        {tools.map((tool) => (
          <Tool tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
