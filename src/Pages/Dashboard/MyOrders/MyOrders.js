import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const [deletee, setDeletee] = useState(null);
  console.log(user);
  if (loading) {
    <div class='flex items-center justify-center '>
      <div class='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
    </div>;
  }
  const { isLoading, error1, data, refetch } = useQuery('myorder', () =>
    fetch(
      `https://manufacturerwebsite.herokuapp.com/purchase?email=${user.email}`,
      {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    ).then((res) => res.json()),
  );
  const handleOrderCancel = (id) => {
    console.log(id);
    fetch(`https://manufacturerwebsite.herokuapp.com/purchase/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        refetch();
      });
  };
  console.log(data);
  return (
    <div className='mt-10'>
      <div class='overflow-x-auto'>
        <table class='table table-compact w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>

              <th>price</th>
              <th>Total Quantity</th>
              <th>Totalprice</th>

              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>

                <td>{order.price}</td>
                <td>{order.totalOrder}</td>
                <td>{order.totalPrice}</td>

                <td>
                  {!order.paid && (
                    <div>
                      <label for='delete-confirm-modal' class='btn btn-xs'>
                        Cancel Order
                      </label>
                      <div>
                        <input
                          type='checkbox'
                          id='delete-confirm-modal'
                          class='modal-toggle'
                        />
                        <div class='modal modal-bottom sm:modal-middle'>
                          <div class='modal-box'>
                            <h3 class='font-bold text-lg text-red-500'>
                              Are you sure you want to delete?
                            </h3>

                            <div class='modal-action'>
                              <label
                                class='btn btn-xs btn-error'
                                for='delete-confirm-modal'
                                onClick={() => handleOrderCancel(order._id)}>
                                Cancel Order
                              </label>
                              <label
                                for='delete-confirm-modal'
                                class='btn btn-xs'>
                                Cancel
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </td>
                {/* {order.price && !order.paid && (
                  <Link to={`/dashboard/payment/${order._id}`}>
                    <button class='btn btn-xs'>Pay</button>
                  </Link>
                )} */}
                {order.price && !order.paid && (
                  <Link to={`/dashboard/payment/${order._id}`}>
                    <button className='btn btn-xs btn-success'>pay</button>
                  </Link>
                )}
                {order.price && order.paid && (
                  <div>
                    <p>
                      <span className='text-success'>Paid</span>
                    </p>
                    <p>
                      Transaction id:{' '}
                      <span className='text-success'>
                        {order?.transactionId}
                      </span>
                    </p>
                  </div>
                )}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>

              <th>price</th>
              <th>Total Quantity</th>
              <th>Totalprice</th>

              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>

        {/* modal */}

        {/*  */}
      </div>
    </div>
  );
};

export default MyOrders;
