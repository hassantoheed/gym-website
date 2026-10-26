
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-8 py-4">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-orange-500">
        FitZone
      </h1>

      {/* Links */}
      <div className="flex gap-6">
        <Link to="/"
        className="navlink">
          Home
        </Link>
        <Link to="/classes"
        className="navlink">
          Classes
        </Link>
        <Link to="/trainers"
        className="navlink">
          Trainers
        </Link>
        <Link to="/membership"
        className="navlink">
          Membership
        </Link>


<Link
  to="/contact"
  className="navlink"
>
  Contact
</Link>

     
      </div>

    
    </nav>
  );
}

export default Navbar;