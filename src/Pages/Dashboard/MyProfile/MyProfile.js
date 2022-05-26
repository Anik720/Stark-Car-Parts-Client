import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
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
    fetch('https://manufacturerwebsite.herokuapp.com/myprofile', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div class='card-body'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Name'
              class='input input-bordered'
              value={user.displayName}
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is required',
                },
              })}
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='Email'
              class='input input-bordered'
              value={user.email}
              {...register('email', {
                required: {
                  value: true,
                  message: 'email is required',
                },
              })}
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>education</span>
            </label>
            <input
              type='text'
              placeholder='education'
              class='input input-bordered'
              {...register('education', {
                required: {
                  value: true,
                  message: 'education is required',
                },
              })}
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>location </span>
            </label>
            <input
              type='text'
              placeholder='location'
              class='input input-bordered'
              {...register('location', {
                required: {
                  value: true,
                  message: 'location is required',
                },
              })}
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>phone number</span>
            </label>
            <input
              type='number'
              placeholder='phone'
              class='input input-bordered'
              {...register('phone', {
                required: {
                  value: true,
                  message: 'phone is required',
                },
              })}
            />
          </div>
          <div class='form-control mt-6'>
            <button type='submit' class='btn btn-black'>
              Submit
            </button>
            <Link to='/dashboard/updateprofile' class='btn btn-black mt-5'>
              {' '}
              <button>Update Profile</button>
            </Link>
            {/*  */}

            {/*  */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
