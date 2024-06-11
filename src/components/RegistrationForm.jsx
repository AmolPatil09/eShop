import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/RegistrationForm.css'; 

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      // Handle form submission
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 ">
      <div className="row w-100">
        <div className='offset-3 col-sm-12 m-auto col-md-6 offset-md-3 '>
          <div className='card'>
            <div className='card-body'>
              <h3 className="text-center mb-4">Register</h3>
              <form onSubmit={handleSubmit}>
                <div  className='text-start form-group '>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className='form-control'
                  />
                  <p className='text-danger' type="invalid">
                    {errors.name}
                  </p>
                </div>

                <div  className='text-start mt-3 form-group'>
                  <label className='form-label'>Email address</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='form-control'
                  />
                  <p className='text-danger' type="invalid">
                    {errors.email}
                  </p>
                </div>

                <div  className='text-start mt-3 form-group'>
                  <label className='form-label'>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className='form-control'
                  />
                  <p className='text-danger' type="invalid">
                    {errors.password}
                  </p>
                </div>

                <div  className="text-start  mt-3 form-group">
                  <label className='form-label'>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className='form-control'
                  />
                  <p className='text-danger' type="invalid">
                    {errors.confirmPassword}
                  </p>
                </div>

                <button  type="submit" className="w-100 mt-4 btn btn-primary ">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
