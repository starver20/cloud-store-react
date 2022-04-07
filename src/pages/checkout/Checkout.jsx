import React, { useState } from 'react';
import { useAddress } from '../../context/address/address-context';
import CheckoutCard from '../../components/card/CheckoutCard';
import { useCart } from '../../context/cart/cart-context';
import Navbar from '../../components/navbar/Navbar';
import classes from '../cart/Cart.module.css';
import useAPI from '../../hooks/useAPI';
import addAddressHandler from '../../utils/addAddressHandler';
import editAddressHandler from '../../utils/editAddressHandler';
import deleteAddressHandler from '../../utils/deleteAddressHandler';
import AddressModal from '../../components/address-modal/AddressModal';

const Checkout = () => {
  const { cartProducts, orderAddress, cartDispatch } = useCart();
  const { address, addressDispatch } = useAddress();
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [curentAddress, setCurrentAddress] = useState({});

  const { totalItems, totalPrice } = cartProducts.reduce(
    (acc, cur) => {
      console.log(cur.price, cur.qty);
      console.log(cur.price * cur.qty);
      return {
        totalItems: acc.totalItems + cur.qty,
        totalPrice: acc.totalPrice + cur.qty * cur.price,
      };
    },
    {
      totalItems: 0,
      totalPrice: 0,
    }
  );

  console.log(orderAddress);

  const addressChangeHandler = (e) => {
    console.log(e.target.value);
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
    console.log('Edit Handler');
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
        <main className={classes['address-select']}>
          {cartProducts.length > 0 ? (
            <div className={classes['secondary-checkout']}>
              <h1>CART</h1>
              <div>
                <span>
                  {totalItems} ITEMS | ₹{totalPrice}
                </span>
              </div>
            </div>
          ) : null}

          <div className={classes['prod-listing']}>
            {address.length > 0 ? (
              address.map(
                ({ name, building, city, state, pincode, mobile, _id }) => (
                  <>
                    <div className={classes['address-container']}>
                      <div
                        className={`inp-container ${classes['select-address']}`}
                      >
                        <input
                          type="radio"
                          name="address"
                          id="address"
                          className={classes['address-input']}
                          checked={orderAddress._id === _id}
                          onClick={() => {
                            console.log('amar');
                            cartDispatch({
                              type: 'UPDATE_ORDER_ADDRESS',
                              payload: {
                                address: {
                                  name,
                                  building,
                                  city,
                                  state,
                                  pincode,
                                  mobile,
                                  _id,
                                },
                              },
                            });
                          }}
                        />
                        <label className={classes.name} htmlFor="address">
                          {name}
                        </label>
                      </div>

                      <div className={classes['single-address-container']}>
                        <div className={classes.address}>
                          <p>{building}</p>
                          <p>{city}</p>
                          <p>{state}</p>
                          <p>{pincode}</p>
                          <p>{mobile}</p>
                        </div>
                        <div
                          className={classes['address-actions']}
                          onClick={() => {
                            editClickHandler(address);
                          }}
                        >
                          {/* <p className={classes['address-edit']}>EDIT</p> */}
                        </div>
                      </div>
                    </div>
                  </>
                )
              )
            ) : (
              <p className={classes.msg}>
                You currently don't have any saved delivery addresses.Add an
                address here to be pre-filled for quicker checkout.
              </p>
            )}
            <button onClick={addClickHandler} className="nav--action__login">
              Add Address
            </button>
          </div>
        </main>

        {cartProducts.length > 0 ? (
          <aside>
            <CheckoutCard
              cartProducts={cartProducts}
              cartTotalItems={totalItems}
              cartTotalPrice={totalPrice}
              type="address"
              curentAddress={curentAddress}
            />
          </aside>
        ) : null}
      </section>
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
    </div>
  );
};

export default Checkout;
