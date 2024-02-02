import React, { useState } from 'react';

const Login = ({ onLogin, onSwitchToRegister }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoginSuccessful = onLogin(loginData);

    if (isLoginSuccessful) {
      alert('Login successful!');
    } else {
      alert('Login failed. Check your username and email.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" value={loginData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password" className="form-control" name="password" value={loginData.password} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">
        Not registered yet? <button className="btn btn-link" onClick={onSwitchToRegister}>Click here to register</button>
      </p>
    </div>
  );
};

export default Login;
