
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navigation" >
        <Link to="/Home" style={{ textDecoration: 'none' }}>
          <li className="li-items">Home</li>
        </Link>
        <Link to="/product" style={{ textDecoration: 'none' }}>

          <li className="li-items">Products</li>
        </Link>
        <Link to="/Users" style={{ textDecoration: 'none' }}>

          <li className="li-items">Users</li>
        </Link>
        <Link to="/Contact" style={{ textDecoration: 'none' }}>
          <li className="li-items">Contact</li>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', background: 'grey', borderRadius: '10px' }}>
          <li className="li-items" style={{ padding: '.1rem', borderRadius: '5px', fontSize: 'small' }}
          > Log out </li>
        </Link>
      </div>
    </div >
  );
}
export default Navbar;
