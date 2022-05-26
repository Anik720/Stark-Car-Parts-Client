import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  const navigate = useNavigate();
  const handleTool = () => {
    navigate(`/purchase/${tool._id}`);
  };
  return (
    <div>
      <div
        class='card card-side bg-gradient-to-r from-slate-300 to-gray-100 shadow-xl'
        data-aos='flip-left'
        data-aos-duration='3000'>
        <figure>
          <img src={tool.image} alt='Movie' />
        </figure>
        <div class='card-body'>
          <small class=''>Name:{tool.name}</small>
          <small title={tool.description}>
            Description: {tool.description.substring(0, 15) + '...'}
          </small>
          <small>MinimumQuantity: {tool.minimumQuantity}</small>
          <small>AvailableQuantity: {tool.availableQuantity}</small>
          <small>Price: {tool.price}</small>
          <p></p>
          <div class='card-actions justify-end'>
            <button class='btn btn-black' onClick={handleTool}>
              Purchase{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
