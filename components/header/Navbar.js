import Navheader from "./Navheader" ;
import Navlist from "./Navlist" ;

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <Navheader/>
      <Navlist/>
    </div>
  </nav>
);

export default Navbar;