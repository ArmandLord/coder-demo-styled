import { Nav, IconBac } from "./Navbar.style";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <IconBac />
        <div className="div">
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/contact'>contact</Link></li>
          </ul>
        </div>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navbar;
