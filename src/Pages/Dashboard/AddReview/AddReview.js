import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddReview = () => {
  const handleRatings = (e) => {
    e.preventDefault();

    const ratings = e.target.ratings.value;
    const description = e.target.description.value;
    const data = { ratings, description };
    console.log(data);

    fetch('https://manufacturerwebsite.herokuapp.com/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        toast('Review Given');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div>
      <h2>Give A Review</h2>

      <form onSubmit={handleRatings}>
        <div class='card-body'>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Your Ratings</span>
            </label>
            <input
              type='Number'
              placeholder='Your Ratings'
              class='input input-bordered'
              name='ratings'
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Description</span>
            </label>
            <input
              type='text'
              placeholder='description'
              class='input input-bordered'
              name='description'
            />
          </div>
          <div class='form-control mt-6'>
            <button class='btn btn-black' type='submit'>
              Submit
            </button>
          </div>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddReview;
