import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const Updateprofile = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (loading) {
    return (
      <div class='flex items-center justify-center '>
        <div class='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
      </div>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    fetch(
      `https://manufacturerwebsite.herokuapp.com/myprofile?email=${user.email}`,
      {
        method: 'PATCH', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        toast('Updated SuccessFully');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class='card-body'>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Name'
              class='input input-bordered'
              {...register('updatename', {
                required: {
                  value: true,
                  message: 'updatename is required',
                },
              })}
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Email</span>
            </label>
            <input
              type='text'
              placeholder='updateemail'
              class='input input-bordered'
              value={user.email}
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Education</span>
            </label>
            <input
              type='text'
              placeholder='Education'
              class='input input-bordered'
              {...register('updateeducation', {
                required: {
                  value: true,
                  message: 'updateeducation is required',
                },
              })}
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Location</span>
            </label>
            <input
              type='text'
              placeholder='Location'
              class='input input-bordered'
              {...register('updatelocation', {
                required: {
                  value: true,
                  message: 'updatelocation is required',
                },
              })}
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Phone Number</span>
            </label>
            <input
              type='text'
              placeholder='Phone Number'
              class='input input-bordered'
              {...register('updatephone', {
                required: {
                  value: true,
                  message: 'updatephone is required',
                },
              })}
            />
          </div>
        </div>
        <div className='flex items-center'>
          <button type='submit' class='btn btn-primary m-auto'>
            Update
          </button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Updateprofile;
