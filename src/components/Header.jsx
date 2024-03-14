import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="navlink">
            <p>Myntra Men</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" className="navlink">
            wishlist
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="navlink">
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
