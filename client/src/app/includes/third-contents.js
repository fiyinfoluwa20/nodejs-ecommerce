import { Link } from 'react-router-dom';
export default function ThirdContent() {
  return (
            <div className="order-2 d-flex d-lg-none" id="navbarMenuMobile">
              <ul className="navbar-nav navbar-nav--icons ml-auto position-relative">

                <li className="nav-item">
                  <a href="#" className="nav-icon"><i className="icon-search"></i></a>
                </li>

                <li className="nav-item dropdown dropdown-md dropdown-hover">
                  <Link to="/cart" className="nav-icon"><i className="icon-shopping-bag"></i></Link>
                </li>

                <li className="nav-item dropdown dropdown-md dropdown-hover">
                  <a href="#" className="nav-icon" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="icon-menu"></i>
                  </a>
                </li>

              </ul>
            </div>
    );
}