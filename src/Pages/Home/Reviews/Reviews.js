import React from 'react';
import { useQuery } from 'react-query';
import Review from '../Review/Review';

const Reviews = () => {
  const url = `https://manufacturerwebsite.herokuapp.com/reviews`;
  const { data: reviews, isLoading } = useQuery(['reviews'], () =>
    fetch(url).then((res) => res.json()),
  );
  console.log(reviews);
  if (isLoading) {
    return (
      <div class='flex items-center justify-center '>
        <div class='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
      </div>
    );
  }

  return (
    <div className='mt-10'>
      <h1 className='text-center font-bold text-xl my-10'>User Reviews</h1>
      <div className='grid lg:grid-cols-3'>
        {reviews.map((review) => (
          <Review review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
