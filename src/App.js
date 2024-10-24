import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbars/navbar';
import Login from './components/auth/login';
import Users from './components/users';
import Product from './components/products';
import useToken from './hooks/useToken';
import ROUTES from './constants/routeConstants';
import Register from './components/auth/register';

function App() {
  const { token, setToken } = useToken();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login setToken={setToken} />} />
        <Route path={ROUTES.USERS} element={<Users />} />
        <Route path={ROUTES.PRODUCTS} element={<Product />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;