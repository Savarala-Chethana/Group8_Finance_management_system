// Login.jsx
 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
const response = await axios.post('http://localhost:8080/login', { username, password });
      localStorage.setItem('token', response.data.token);
      history('/landing'); // Redirect to landing page after successful login
    } catch (error) {
      setError('Invalid username or password');
    }
  };
 
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};
 
export default Login;