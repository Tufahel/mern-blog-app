import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        My logo
      </Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link href="">Register</Link>
      </nav>
    </header>
  );
}

export default Header;
