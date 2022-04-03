import Modal from '../modal/Modal';

import React from 'react';

const AddressModal = ({ toggleAddressModal }) => {
  let content = (
    <>
      <form action="">
        <input type="text" />
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Building</label>
        <input type="text" />
        <label htmlFor="">City</label>
        <input type="text" />
        <label htmlFor="">State</label>
        <input type="number" />
        <label htmlFor="">Pincode</label>
        <input type="number" />
        <label htmlFor="">Mobile</label>
      </form>
    </>
  );

  return <Modal onClick={toggleAddressModal}>{content}</Modal>;
};

export default AddressModal;
