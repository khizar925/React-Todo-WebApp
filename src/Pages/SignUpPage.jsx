import { useNavigate } from 'react-router-dom';
import users from '../data/users';
import { useState } from 'react';

export default function SignUpPage() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setErrorMessage("User with this email already exists.");
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      todos: []
    };

    localStorage.setItem('loggedInUser', JSON.stringify(newUser));
    navigate('/dashboard');
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
      <form onSubmit={handleSignup} style={cardStyle}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="First Name"
          style={inputStyle}
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          style={inputStyle}
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && <h3 style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</h3>}

        <button type="submit" style={btnStyle}>Sign Up</button>

        <div style={linkStyle} onClick={() => navigate('/login')}>
          Already have an account? Login
        </div>
      </form>
    </div>
  );
}
