import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const Manageproduct = () => {
  // const [tools, setTools] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:5000/tools')
  //     .then((res) => res.json())
  //     .then((data) => setTools(data));
  // });
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery(['tools'], () =>
    fetch(`https://manufacturerwebsite.herokuapp.com/tools`, {
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
  const handleDelete = (id) => {
    fetch(`https://manufacturerwebsite.herokuapp.com/tools/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
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
        <table class='table table-compact w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>

              <th>image</th>
              <th>minimumQuantity</th>
              <th>availableQuantity</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {tools?.map((tool, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{tool.name}</td>

                <td>{tool.image}</td>
                <td>{tool.minimumQuantity}</td>
                <td>{tool.availableQuantity}</td>
                <td>{tool.price}</td>
                <td>
                  <div>
                    <div>
                      <label for='delete-confirm-modal' class='btn btn-xs'>
                        Delete Product
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
                                onClick={() => handleDelete(tool._id)}>
                                Delete
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
                  </div>
                  {/* <button
                    class='btn btn-xs'
                    onClick={() => handleDelete(tool._id)}>
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>

              <th>image</th>
              <th>minimumQuantity</th>
              <th>availableQuantity</th>
              <th>price</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Manageproduct;
