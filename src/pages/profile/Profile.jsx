import React, { useState } from 'react';
import classes from './Profile.module.css';
import Navbar from '../../components/navbar/Navbar';
import { useAddress } from '../../context/address/address-context';
import AddressModal from '../../components/address-modal/AddressModal';
import addAddressHandler from '../../utils/addAddressHandler';
import useAPI from '../../hooks/useAPI';
import editAddressHandler from '../../utils/editAddressHandler';
import deleteAddressHandler from '../../utils/deleteAddressHandler';
import getInitials from '../../utils/getInitials';

const Profile = () => {
  const { address, addressDispatch } = useAddress();
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [curentAddress, setCurrentAddress] = useState({});
  const [active, setActive] = useState('profile');
  const [initials, setinitials] = useState(getInitials());
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')).user
  );

  const addressChangeHandler = (e) => {
    setCurrentAddress((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const toggleAddressModal = () => {
    setShowAddressModal((prevState) => !prevState);
  };

  const addClickHandler = () => {
    setIsEditing(false);
    toggleAddressModal();
  };

  const editClickHandler = (address) => {
    setCurrentAddress(address);
    setIsEditing(true);
    toggleAddressModal();
  };

  const { callAsyncFunction: addAddress, loading: addAddressLoading } = useAPI(
    addAddressHandler,
    addressDispatch,
    curentAddress
  );
  const { callAsyncFunction: editAddress, loading: editAddressLoading } =
    useAPI(editAddressHandler, addressDispatch, curentAddress);

  const { callAsyncFunction: deleteAddress, loading: deleteAddressLoading } =
    useAPI(deleteAddressHandler, addressDispatch, curentAddress);

  return (
    <div>
      <Navbar />
      <section className={classes['main-content']}>
        <aside>
          <div
            onClick={() => {
              setActive('profile');
            }}
            name="profile"
            className={`${classes['sidebar-item']} ${
              active === 'profile' && classes.active
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <p>Profile</p>
          </div>

          <div
            onClick={() => {
              setActive('address');
            }}
            name="address"
            className={`${classes['sidebar-item']} ${
              active === 'address' && classes.active
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
                clipRule="evenodd"
              />
            </svg>
            <p>Manage Address</p>
          </div>
        </aside>
        <main className={classes.main}>
          <div>
            <div className={classes.banner}>
              <div className={classes.hero}>
                <h1>Hello {user.firstName}, what are you looking for today?</h1>
                <div className={classes.img}>
                  <span>{initials}</span>
                </div>
              </div>
            </div>
            <section className={classes.section}>
              {active === 'profile' && (
                <div className={classes['container']}>
                  <div>
                    <span className={classes['title']}>{user.firstName} </span>
                    <span className={classes['title']}>{user.lastName}</span>
                  </div>
                  <span className={classes['title']}>{user.email}</span>
                </div>
              )}
              {active === 'address' && (
                <div className={classes['container']}>
                  <p className={classes['title']}>Saved Delivery Addresses</p>
                  {address.length > 0 ? (
                    address.map((address) => {
                      return (
                        <div className={classes['single-address-container']}>
                          <div className={classes.address}>
                            <p>{address.name}</p>
                            <p>{address.building}</p>
                            <p>{address.city}</p>
                            <p>{address.state}</p>
                            <p>{address.pincode}</p>
                            <p>{address.mobile}</p>
                          </div>
                          <div
                            className={classes['address-actions']}
                            onClick={() => {
                              editClickHandler(address);
                            }}
                          >
                            <p className={classes['address-edit']}>EDIT</p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className={classes.msg}>
                      You currently don't have any saved delivery addresses.Add
                      an address here to be pre-filled for quicker checkout.
                    </p>
                  )}
                  <button
                    onClick={addClickHandler}
                    className="nav--action__login"
                  >
                    Add Address
                  </button>
                </div>
              )}
            </section>
          </div>
        </main>
        {showAddressModal && (
          <AddressModal
            toggleAddressModal={toggleAddressModal}
            addressChangeHandler={addressChangeHandler}
            addAddress={addAddress}
            editAddress={editAddress}
            deleteAddress={deleteAddress}
            curentAddress={curentAddress}
            isEditing={isEditing}
            setCurrentAddress={setCurrentAddress}
          />
        )}
      </section>
    </div>
  );
};

export default Profile;
