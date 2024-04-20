import "./index.css";

const Header = () => (
  <nav className="nav-container">
    <div className="nav-content-container">
      <h1 className="nav-heading">AMRUTAM</h1>
      <ul className="list-container">
        <li className="list">Home</li>
        <li className="list">Find Doctors</li>
        <li className="list">About Us</li>
      </ul>
      <div>
        <button className="login-button" type="button">
          Login
        </button>
        <button className="sign-button" type="button">
          Sign-Up
        </button>
      </div>
    </div>
  </nav>
);
export default Header;
