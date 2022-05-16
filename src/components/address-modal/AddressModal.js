import Modal from '../modal/Modal';
import classes from './AddressModal.module.css';
import DeleteIcon from '../../assets/svg-icons/DeleteIcon';

import React from 'react';

const AddressModal = ({
  toggleAddressModal,
  addressChangeHandler,
  addAddress,
  editAddress,
  deleteAddress,
  curentAddress: { name, building, city, state, pincode, mobile },
  isEditing,
  setCurrentAddress,
}) => {
  let content = (
    <>
      <form className={classes['address-form']}>
        <div className={classes.header}>
          <p className={classes.title}>Add Address</p>
          <div
            onClick={() => {
              toggleAddressModal();
              setCurrentAddress({});
            }}
          >
            <DeleteIcon />
          </div>
        </div>
        <div class="inp-wrapper">
          <label for="name" class="inp-label">
            Name
          </label>
          <input
            required
            onChange={(e) => addressChangeHandler(e)}
            value={name}
            id="name"
            class="inp"
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div class="inp-wrapper">
          <label for="building" class="inp-label">
            Building
          </label>
          <input
            required
            onChange={(e) => addressChangeHandler(e)}
            value={building}
            id="building"
            class="inp"
            type="text"
            placeholder="Enter Building"
          />
        </div>
        <div class="inp-wrapper">
          <label for="city" class="inp-label">
            City
          </label>
          <input
            required
            onChange={(e) => addressChangeHandler(e)}
            value={city}
            id="city"
            class="inp"
            type="text"
            placeholder="Enter City"
          />
        </div>
        <div class="inp-wrapper">
          <label for="state" class="inp-label">
            State
          </label>
          <input
            required
            onChange={(e) => addressChangeHandler(e)}
            value={state}
            id="state"
            class="inp"
            type="text"
            placeholder="Enter State"
          />
        </div>
        <div class="inp-wrapper">
          <label for="pincode" class="inp-label">
            Pincode
          </label>
          <input
            required
            onChange={(e) => addressChangeHandler(e)}
            value={pincode}
            id="pincode"
            class="inp"
            type="number"
            placeholder="Enter Pincode"
          />
        </div>
        <div class="inp-wrapper">
          <label for="mobile" class="inp-label">
            Mobile
          </label>
          <input
            required
            onChange={(e) => addressChangeHandler(e)}
            value={mobile}
            id="mobile"
            class="inp"
            type="number"
            placeholder="Enter Mobile"
          />
        </div>
        <div className={classes['save-btn']}>
          {isEditing && (
            <button
              type="button"
              onClick={async () => {
                await deleteAddress();
                setCurrentAddress({});
                toggleAddressModal();
              }}
              className="nav--action__login"
            >
              Delete
            </button>
          )}
          <button
            type="button"
            onClick={async () => {
              isEditing ? await editAddress() : await addAddress();
              setCurrentAddress({});
              toggleAddressModal();
            }}
            className="nav--action__login"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );

  return <Modal onClick={toggleAddressModal}>{content}</Modal>;
};

export default AddressModal;
