import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate();
  const redirectLogin = () => {
    navigate("/login");
  }
  const redirectSignup = () => {
    navigate("/signup");
  }
  const btnStyle = {
    padding: '8px 16px',
    margin: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };
  return (
    <div style={{height:"86vh",display:"flex", justifyContent: 'center', alignItems: 'center'}}>
      <div style={{ textAlign: 'center' }}>
      <h1>Welcome to my Todo-List</h1>
      <p style={{fontSize: "20px"}}>Your Simple, fast, and efficient Todo Manager.</p>
      <div>
        <button onClick={redirectLogin} style={btnStyle}>Login</button>
        <button onClick={redirectSignup} style={btnStyle}>Signup</button>
      </div>
      <p style={{fontSize: "20px"}}>Organize your life, one task at a time</p>
  </div>
    </div>
  ) 
}
