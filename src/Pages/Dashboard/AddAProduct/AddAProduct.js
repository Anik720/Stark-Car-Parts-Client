import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddAProduct = () => {
  const handleSubmitt = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const minimumQuantity = e.target.minimumQuantity.value;
    const availableQuantity = e.target.availableQuantity.value;
    const price = e.target.price.value;
    const data = {
      name,
      description,
      image,
      minimumQuantity,
      availableQuantity,
      price,
    };

    if (parseInt(minimumQuantity) > parseInt(availableQuantity)) {
      return toast(
        'Available quantity should be greater than the minimumquantity!',
      );
    }
    fetch('https://manufacturerwebsite.herokuapp.com/tools', {
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
        toast('Item Added');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmitt}>
        <div class='card-body'>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>name</span>
            </label>
            <input
              type='text'
              placeholder='Name'
              class='input input-bordered'
              name='name'
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>description</span>
            </label>
            <input
              type='text'
              placeholder='description'
              class='input input-bordered'
              name='description'
            />
          </div>

          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>image</span>
            </label>
            <input
              type='text'
              placeholder='image'
              class='input input-bordered'
              name='image'
            />
          </div>

          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>minimumQuantity</span>
            </label>
            <input
              type='text'
              placeholder='minimumQuantity'
              class='input input-bordered'
              name='minimumQuantity'
            />
          </div>

          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>availableQuantity</span>
            </label>
            <input
              type='text'
              placeholder='availableQuantity'
              class='input input-bordered'
              name='availableQuantity'
            />
          </div>

          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>price</span>
            </label>
            <input
              type='text'
              placeholder='price'
              class='input input-bordered'
              name='price'
            />
          </div>
          <div class='form-control mt-6'>
            <button type='submit' class='btn btn-primary'>
              Add Product
            </button>
          </div>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddAProduct;
