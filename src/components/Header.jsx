import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
export default function Header() {

  return (
  <div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    borderBottom: "1px solid #ccc"
  }}>
    <div>Khizar Todo</div>

    <div style={{ display: "flex", gap: "20px" }}>
      <Link style={{textDecoration: 'none', color: "#3D74B6"}} to="/">Home</Link>
      <Link style={{textDecoration: 'none', color: "#3D74B6"}} to="/about">About</Link>
      <Link style={{textDecoration: 'none', color: "#3D74B6"}} to="/contact">Contact Us</Link>
    </div>

    <div>
        <img src={logo} alt="Logo" style={{ width: '40px', height: '40px' }} />
    </div>
  </div>
);

}
