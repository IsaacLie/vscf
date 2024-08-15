import { Link, useLocation } from "react-router-dom";

const Nav = () =>{
  const location = useLocation();
    return (
        <nav>
            <div className="Navi-container">
            <ul className="Navi-wrapper">
              <li className={
                location.pathname === '/' ? 'active' :
                location.pathname === '/'|| location.pathname.startsWith('/tournaments') ? 'active' : ''
                }>
                <Link to='/'><h2>Tournaments</h2></Link>
              </li>
              <li className={location.pathname === '/news' ? 'active' : ''}>
                <Link to='/news'><h2>News</h2></Link>
              </li>
              <li className={location.pathname === '/ratings' ? 'active' : ''}>
                <Link to='/ratings'><h2>Ratings</h2></Link>
              </li>
              <li className={location.pathname === '/vscf' ? 'active' : ''}>
                <Link to='/vscf'><h2>VSCF</h2></Link>
              </li>
              <li className={location.pathname === '/contact-us' ? 'active' : ''}>
                <Link to='/contact-us'><h2>Contact Us</h2></Link>
              </li>
            </ul>
            </div>
          </nav>
    )
}

export default Nav;