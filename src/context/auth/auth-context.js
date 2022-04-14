import axios from 'axios';
import { createContext, useContext, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const authContext = createContext({
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  user: {},
});

const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useAuth = () => useContext(authContext);

// Used this pattern from useHooks.com

const useProvideAuth = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const login = async (body) => {
    let response = await axios.post('/api/auth/login', body);
    if (response.status === 200) {
      localStorage.setItem('jwt', response.data.encodedToken);
      localStorage.setItem('user', JSON.stringify(response.data.foundUser));
      setUser(response.data.foundUser);
    }
    return { user: response.data.foundUser, status: response.status };
  };

  const signup = async (body) => {
    let response = await axios.post('/api/auth/signup', body);
    if (response.status === 201) {
      toast.success('Signup successfull.');
      localStorage.setItem('jwt', response.data.encodedToken);
      localStorage.setItem('user', JSON.stringify(response.data.createdUser));
      setUser(response.data.createdUser);
    }
    return { user: response.data.createdUser, status: response.status };
  };

  const logout = () => {
    toast.success('Logout successfull.');
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return { login, signup, user, logout };
};

export { AuthProvider, useAuth };
