import { Link } from "react-router-dom";

const Header = () => (

    <div className="nav-wrapper">
      <nav className="nav">
        <Link to="/" className="nav-link"><p>Home run away</p></Link>
        <Link to="/portfolio" className="nav-link"><p>Portfolio pain</p></Link>
        <Link to="/contact" className="nav-link"><p>Contact me or smth</p></Link>
      </nav>
    </div>


);

export default Header;