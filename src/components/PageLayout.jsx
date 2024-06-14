import React from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import { useSelector } from 'react-redux';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Logout from './Logout';
export default function PageLayout() {
  const isLogin=useSelector(store=>store.login.islogin)
  return (
    <>
    <Router>
    <NavigationBar/>
    <div style={{minHeight:'580px'}}>
    <Routes>
    <Route path='/' Component={isLogin?Home:LoginForm}/>
      <Route path='/login' Component={LoginForm}/>
      <Route path='/home' Component={Home}/>
      <Route path='/cart' Component={Cart}/>
      <Route path='logout' Component={Logout}/>


      <Route path='/product/:id' Component={ProductDetails}/>
      <Route path='/register' Component={RegistrationForm}/>
    </Routes>
    </div>
    <Footer/>
    </Router>
    </>
  )
}
