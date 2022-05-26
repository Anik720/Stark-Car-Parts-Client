import React from 'react';
import { useQuery } from 'react-query';

const ManageOrders = () => {
  const { data, isLoading, error1, refetch } = useQuery('orders', () =>
    fetch(`https://manufacturerwebsite.herokuapp.com/purchaseall`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json()),
  );
  if (isLoading) {
    return (
      <div class='flex items-center justify-center '>
        <div class='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
      </div>
    );
  }
  console.log(data);
  const handleShip = (id) => {
    console.log(id);
    fetch(`https://manufacturerwebsite.herokuapp.com/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        refetch();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleOrderCancell = (id) => {
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
  return (
    <div>
      <div class='overflow-x-auto'>
        <table class='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>totalOrder</th>

              <th>totalPrice</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((x, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.totalOrder}</td>
                <td>{x.totalPrice}</td>
                <td>
                  {!x.paid ? (
                    <button class='btn btn-xs'>Unpaid</button>
                  ) : (
                    <button class='btn btn-xs'>Paid</button>
                  )}
                </td>
                <td>
                  {x.paid && (
                    <button
                      class='btn btn-xs'
                      id='status'
                      onClick={() => handleShip(x._id)}>
                      {x.status === 'shipped' ? 'Shipped' : 'Pending'}
                    </button>
                  )}
                </td>
                <td>
                  {!x.paid && (
                    <div>
                      <label for='delete-confirm-modall' class='btn btn-xs'>
                        Cancel Order
                      </label>
                      <div>
                        <input
                          type='checkbox'
                          id='delete-confirm-modall'
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
                                for='delete-confirm-modall'
                                onClick={() => handleOrderCancell(x._id)}>
                                Cancel Order
                              </label>
                              <label
                                for='delete-confirm-modall'
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
