import { createContext, useContext, useReducer } from 'react';

const initialAddressState = {
  address: [],
  addressDispatch: () => {},
};

const AddressContext = createContext(initialAddressState);

const addressReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ADDRESS':
      return { address: action.paload.address };

    default:
      return state;
  }
};

const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialAddressState
  );

  const value = { ...addressState, addressDispatch };

  return (
    <AddressContext.Provider value={value}>{children}</AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
