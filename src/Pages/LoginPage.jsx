import { useNavigate } from 'react-router-dom';
import users from '../data/users';
import { useState } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find((user) => user.email === email && user.password === password);
    
    if (foundUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      navigate('/dashboard');
    } else {
      setErrorMessage("Invalid email or password.");
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const cardStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    width: '90%',
    padding: '8px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };

  const btnStyle = {
    padding: '8px 16px',
    margin: '10px 5px 0',
    backgroundColor: '#3D74B6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '94%'
  };

  const linkStyle = {
    marginTop: '10px',
    color: '#007bff',
    cursor: 'pointer',
    fontSize: '14px'
  };

  return (
    <div style={{
      height: '86vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form onSubmit={handleLogin} style={cardStyle}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
          required
          value={email}
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          required
          value={password}
          onChange={handlePassword}
        />
        {errorMessage && (
          <h3 style={{ color: "red", fontSize: "14px" }}>{errorMessage}</h3>
        )}

        <button type="submit" style={btnStyle}>Login</button>

        <div style={linkStyle} onClick={() => navigate('/')}>
          ← Back to Home
        </div>
        <div style={linkStyle} onClick={() => navigate('/signup')}>
          Don't have an account? Sign Up
        </div>
      </form>
    </div>
  );
}
