import {Link} from 'react-router-dom';
export default function FirstContent() {
  return (
         <div className="collapse navbar-collapse order-4 order-lg-1" id="navbarMenu">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About
                  </Link>
                </li>
                
              </ul>
            </div>
    );
}