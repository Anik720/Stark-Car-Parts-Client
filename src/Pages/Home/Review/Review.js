import React from 'react';

const Review = ({ review }) => {
  return (
    <div>
      <div class='card w-96 bg-base-100 shadow-xl'>
        <div class='card-body'>
          <h2 class='card-title'>Ratings: {review.ratings}</h2>
          <p>Description: {review.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
