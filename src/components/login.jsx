import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });
      console.log(response);
      
      const { token } = response.data;

      if (token) {
        localStorage.setItem('token', JSON.stringify(token));
        navigate('/'); // Redirect to a secure route after login
      } else {
        setError('Invalid login credentials');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="bg-[#f5ebdc] shadow-md p-3 rounded" onSubmit={handleLogin}>
        <h1 className="font-[900] font-[flame] text-2xl text-[#502314] text-center mb-3">LOGIN</h1>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <div className="mt-3">
          <label htmlFor="email" className="block mb-2 tracking-tight text-[#502314] font-[800] font-[flame]">Email</label>
          <input
            type='email'
            id='email'
            placeholder="Email"
            className="border border-2px w-[400px] outline-gray-500 h-10 pl-4 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="block mb-2 tracking-tight text-[#502314] font-[800] font-[flame]">Password</label>
          <input
            type="password"
            id='password'
            placeholder="Password"
            className="border border-2px w-[400px] outline-gray-500 h-10 pl-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p className="text-[#502314] tracking-tight font-[flame]"><Link to='/forgotPassword'>Forgotten password?</Link></p>
        <div className="flex justify-between items-center mt-6">
          <div>
            <button type="submit" className="bg-[#d72300] p-1 w-44 rounded-full text-white font-[900] font-[flame]">Login Now</button>
          </div>
          <h1 className="font-[900] font-[flame] text-[#502314]"><Link to='/register'>Register Now</Link></h1>
        </div>
      </form>
    </div>
  );
};

export default Login;
