import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css';  // Custom CSS for additional styling
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { RiMenu2Fill } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";

const NavigationBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
   const isLogin=useSelector(store=>store.login.islogin)

   useEffect(()=>{
    console.log(isLogin);
   })

  return (
    <div className='navbar bg-light d-flex'>
      <div className='container'>
        <div className='navbar-brand' href="#home"><FaOpencart className='icon m-2'/>eShop</div>
        <div aria-controls="basic-navbar-nav" />
        <div className='d-none d-md-flex'>
          {
            isLogin ? <div className="nav ms-auto">
              <Link className='nav-link text-black' to="/home"><FaHome className='icon'/></Link>
              <Link className='nav-link text-black' to="/cart"><FaCartArrowDown className='icon'/></Link>
              <Link className='nav-link text-black' to="/logout">Logout</Link>
            </div> : <div className="nav ms-auto">
              <Link className='nav-link text-black' to="/login">Login</Link>
              <Link className='nav-link text-black' to="/register">Register</Link>
            </div>
          }
        </div>
        <div className='d-flex d-md-none ' >
          <div className="nav ms-auto d-sm-flex d-md-none justify-content-between">
          <Link className='nav-link text-black' to="/cart"><FaCartArrowDown className='icon'/></Link>
            <div onClick={() => { setShowMobileMenu(!showMobileMenu) 
            }}><RiMenu2Fill className='icon mt-2'/></div>
          </div>
        </div>
      </div>
      {
        showMobileMenu&&<div>{isLogin ? <div className="nav row text-start d-md-none container ">
          <Link className='nav-link text-black' to="/home">Home</Link>
          <Link className='nav-link text-black' to="/register">Logout</Link>
        </div> : <div className="nav row text-start d-md-none conta">
          <Link className='nav-link text-black' to="/login">Login</Link>
          <Link className='nav-link text-black' to="/register">Register</Link>
        </div>}
        </div>


      }
    </div>
  );
};

export default NavigationBar;
