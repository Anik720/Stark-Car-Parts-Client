import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
  const { id } = useParams();
  const stripePromise = loadStripe(
    'pk_test_51HQeK2BlX0W5Dk4P8Eo4K9rTELAgzW6oyMqoLmyYJWP4EUSAbr4GMsy5NEfRt7lvvfbQTjp7aqbVrSIkGOjV0iOB00UTKCNX96',
  );
  const url = `https://manufacturerwebsite.herokuapp.com/purchase/${id}`;
  const { data: purchase, isLoading } = useQuery(['purchase', id], () =>
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json()),
  );
  console.log(purchase);
  if (isLoading) {
    return (
      <div class='flex items-center justify-center '>
        <div class='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
      </div>
    );
  }
  return (
    <div>
      <div class='card w-96 bg-base-100 shadow-xl'>
        <div class='card-body'>
          <h2 class='card-title'>Pay for {purchase.name}</h2>
          <p>
            You have to pay for the product which totalPrice price is{' '}
            {purchase.totalPrice} of TotalQuantity {purchase.totalOrder}
          </p>
          <div class='card-actions justify-end'>
            <div class=''>
              <div class='card-body'></div>
            </div>
          </div>
        </div>
      </div>

      <div class='card w-96 bg-base-100 shadow-xl'>
        <div class='card-body'>
          <Elements stripe={stripePromise}>
            <CheckoutForm
              totalPrice={purchase.totalPrice}
              purchase={purchase}
            />
          </Elements>
          <div class='card-actions justify-end'></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
