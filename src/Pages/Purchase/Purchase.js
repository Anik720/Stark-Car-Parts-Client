import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';
const Purchase = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const [active, setActive] = useState(false);
  const [result, setResult] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    data: tool,
    isLoading,
    refetch,
  } = useQuery(['tools'], () =>
    fetch(`https://manufacturerwebsite.herokuapp.com/tools/${id}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json()),
  );

  if (isLoading) {
    return <p>Loading</p>;
  }
  const onSubmitt = async (data) => {
    const { minimumQuantity } = tool;
    const { availableQuantity } = tool;
    const { price } = tool;
    console.log(
      data.quantity < minimumQuantity,
      data.quantity > availableQuantity,
      availableQuantity,
      data.quantity,
    );

    if (parseInt(data.quantity) < parseInt(minimumQuantity)) {
      setActive(true);
      return toast(
        "Can't purchase as quantity should be higher than minimumquanyity or lower than the availablequantity!",
      );
    } else if (parseInt(data.quantity) > parseInt(availableQuantity)) {
      setActive(true);
      return toast(
        "Can't purchase as quantity should be higher than minimumquanyity or lower than the availablequantity!",
      );
    } else {
      fetch(
        `https://manufacturerwebsite.herokuapp.com/tools/${id}?minimumquanyity=${data.quantity}&&email=${user.email}&&price=${price}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
        .then((res) => res.json())
        .then((dataa) => {
          console.log(dataa);
          fetch(
            `https://manufacturerwebsite.herokuapp.com/purchase/${dataa._id}?price=${dataa.price}&&quantity=${data.quantity}&&email=${user.email}`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
            },
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              setResult(data);
            });
          refetch();
        });

      toast('Purchased!');
    }
  };
  const handleQuantity = (e) => {
    setActive(false);
  };
  console.log(tool.image);
  return (
    <div className=' '>
      <div class='card lg:card-side bg-base-100 shadow-xl'>
        <figure>
          <img src={tool.image} alt='Album' />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>Name: {tool.name}</h2>
          <p>Description: {tool.description}</p>
          <p>MinimumQuantity: {tool.minimumQuantity}</p>
          <p>AvailableQuantity: {tool.availableQuantity}</p>
          <p>Price per unit: {tool.price}</p>
          <p>User: {user.displayName}</p>
          <p>Email: {user.email}</p>

          <form onSubmit={handleSubmit(onSubmitt)}>
            <input
              type='text'
              placeholder='Your address'
              class='input input-bordered w-full max-w-xs block my-2'
              {...register('address', {
                required: {
                  value: true,
                  message: 'Address is required',
                },
              })}
            />

            <input
              type='number'
              placeholder='Your phonenumber'
              class='input input-bordered w-full max-w-xs'
              {...register('phonenumber', {
                required: {
                  value: true,
                  message: 'Phonenumber is required',
                },
              })}
            />
            <input
              type='number'
              placeholder={
                'Minimum purchase quantity is ' + tool.minimumQuantity
              }
              {...register('quantity', {
                required: {
                  value: true,
                  message: 'Quantity is required',
                },
              })}
              onChange={handleQuantity}
              class='input input-bordered w-full max-w-xs block my-2'
            />
            <label class='label'>
              {errors.quantity?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.quantity.message}
                </span>
              )}
            </label>

            <input
              type='submit'
              className='btn btn-primary'
              disabled={active}
            />
          </form>
          <label htmlFor=''>Increase or decrease quantity</label>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Purchase;
