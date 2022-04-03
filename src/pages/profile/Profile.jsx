import React, { useState } from 'react';
import classes from './Profile.module.css';
import Navbar from '../../components/navbar/Navbar';
import { useAddress } from '../../context/address/address-context';
import AddressModal from '../../components/address-modal/AddressModal';

const Profile = () => {
  const { address } = useAddress();
  const [showAddressModal, setShowAddressModal] = useState(false);

  const toggleAddressModal = () => {
    setShowAddressModal((prevState) => !prevState);
  };
  return (
    <div>
      <Navbar />
      <section className={classes['main-content']}>
        <aside>
          <div className={classes['sidebar-item']}>
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
        <main>
          <div className={classes['address-container']}>
            <p className={classes.address}>Saved Delivery Addresses</p>
            {address.length > 0 ? (
              address.map((address) => {
                <p>address.city</p>;
              })
            ) : (
              <p className={classes.msg}>
                You currently don't have any saved delivery addresses.Add an
                address here to be pre-filled for quicker checkout.
              </p>
            )}
            <button onClick={toggleAddressModal} className="nav--action__login">
              Add Address
            </button>
          </div>
        </main>
        {showAddressModal && (
          <AddressModal toggleAddressModal={toggleAddressModal} />
        )}
      </section>
    </div>
  );
};

export default Profile;
