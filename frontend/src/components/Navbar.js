import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Purchase Orders</h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add">New Order</Link>
      </div>
    </nav>
  );
};

export default Navbar;
