import React from 'react';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';

const User = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('users', () =>
    fetch('https://manufacturerwebsite.herokuapp.com/user', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json()),
  );

  const makeAdmin = (email) => {
    fetch(`https://manufacturerwebsite.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error('Failed to Make an admin');
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  console.log(users);
  return (
    <div>
      <div class='overflow-x-auto'>
        <table class='table w-full'>
          <thead>
            <tr>
              <th></th>

              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  <td>
                    {user.role !== 'admin' && (
                      <button
                        onClick={() => makeAdmin(user.email)}
                        class='btn btn-xs'>
                        Make Admin
                      </button>
                    )}
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default User;
