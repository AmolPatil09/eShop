import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/LoginForm.css';  
import { useNavigate } from 'react-router-dom';
import { changeLoginState } from '../store/actions/actions';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate=useNavigate();
  const dispatch=useDispatch()

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+$/.test(email)) newErrors.email = 'Invalid email address';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({ email, password });
     
    }
    dispatch(changeLoginState(true))
    navigate('/')
  };


  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100">
        <div  className='offset-3 col-sm-12 m-auto col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-body'>
              <h3 className=" mb-4 ">Login</h3>
              <form onSubmit={handleSubmit}>
                <div  className='text-start form-group'>
                  <label className='form-label'>Email address</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='form-control'
                  />
                  <p className='text-danger' type="invalid">
                    {errors.email}
                  </p>
                </div>
                
                <div  className="mt-3 text-start form-group">
                  <label className='form-label'>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='form-control'
                  />
                  <p className='text-danger' type="invalid">
                    {errors.password}
                  </p>
                </div>
                
                <button  type="submit" className="btn btn-primary w-100 mt-4">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
