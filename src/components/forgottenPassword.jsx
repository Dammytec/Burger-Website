import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate()
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/reset-password', { email });
      alert(response.data.message);
      navigate('/reset')
    } catch (error) {
      console.error('Error sending reset email:', error.response.data.message);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center">
      <form onSubmit={handleForgotPassword}>
        <h1>Forgot Password</h1>
        <div className="mt-3">
          <label htmlFor="email" className="block mb-2 tracking-tight text-[#502314] font-[800] font-[flame]">Email</label>
          <input
            type='email'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input-field"
          />
        </div>
        <button type="submit" className="bg-[#f5ebdc] p-1 mt-6 w-44 rounded-full text-white font-[900] font-[flame]">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
