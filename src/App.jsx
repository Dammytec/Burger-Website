import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/menu'
import Home from './components/home';
import Careers from './components/careers';
import News from './components/news';
import Application from './components/application';
import UploadForm from './components/upload';
import Restaurants from './components/restaurants';
import PhoneNumberInput from './components/phoneNumer';
import ProductList from './components/products';
import Cart from './components/cart';
import Order from './components/order';
import State from './components/state';

import PaymentOptions from './components/payment';
import Register from './components/register';
import Login from './components/login';
import ForgotPassword from './components/forgottenPassword';
import ResetPassword from './components/resetPassword';
import CheckoutPage from './components/checkout';
import PaymentConfirmation from './components/paymentConfirmation';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/menu' element={<Menu/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/careers' element={<Careers/>} />
      <Route path='/news' element={<News/>} />
      <Route path='/application' element={<Application/>} />
      <Route path='/upload' element={<UploadForm/>} />
      <Route path='/restaurants' element={<Restaurants/>} />
      <Route path='/products' element={<ProductList/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<Order/>} />
      <Route path='/phoneNumber' element={<PhoneNumberInput/>} />
      <Route path='/state' element={<State/>} />
      <Route path='/payment' element={<PaymentOptions/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/forgotPassword' element={<ForgotPassword/>} />
      <Route path='/reset' element={<ResetPassword/>} />
      <Route path='/checkout' element={<CheckoutPage/>} />
      <Route path='/confirmation' element={<PaymentConfirmation/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
