import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ResetPassword = () => {
  const { token } = useParams(); // Capture token from URL
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    console.log('Token from URL:', token); // This should log the token captured from the URL
    
    try {
      const response = await axios.post(`http://localhost:5000/auth/reset-password/${token}`, { password });
      console.log('Response data:', response.data);
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      console.error('Error resetting password:', error.response.data.message);
      alert(error.response.data.message);
    }
  };
  

  return (
    <div className="min-h-screen flex justify-center">
      <form onSubmit={handleResetPassword}>
        <h1>Reset Password</h1>
        <div className="mt-3">
          <label htmlFor="password" className="block mb-2">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            className="input-field"
          />
        </div>
        <button type="submit" className="bg-blue-500 p-1 mt-6 w-44 rounded-full text-white">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;


