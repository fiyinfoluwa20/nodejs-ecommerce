import SingleCart from "./cart-hover";
import Favorite from "./favorite";
import {Link} from "react-router-dom";

export default function SecondContent() {
  return (
        <div className="collapse navbar-collapse order-5 order-lg-3" id="navbarMenu2">
          <ul className="navbar-nav ml-auto position-relative">

            <li className="nav-item dropdown dropdown-md dropdown-hover">
              <a className="nav-icon dropdown-toggle" id="navbarDropdown-4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="icon-search d-none d-lg-inline-block"></i>
                <span className="d-inline-block d-lg-none">Search</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown-4">
                <div className="form-group">
                  <input type="text" className="form-control" id="searchForm" placeholder="Search for items and brands" />
                </div>
              </div>
            </li>

            <li className="d-none d-lg-inline nav-item dropdown dropdown-md dropdown-hover">
              <a className="nav-icon" id="navbarDropdown-5" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon-globe"></i></a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown-5">
                <fieldset>
                  <div className="row">
                    <div className="col-12">
                      <div className="select-frame">
                        <select className="custom-select custom-select-lg" id="countrySelect1">
                          <option value="1">United States</option>
                          <option value="2">Germany</option>
                          <option value="3">France</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="select-frame">
                        <select className="custom-select custom-select-lg" id="curencySelect1">
                          <option value="1">USD</option>
                          <option value="2">EUR</option>
                          <option value="3">RUB</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </li>

            <li className="nav-item dropdown dropdown-md dropdown-hover">
              <Link to="/profile" className="nav-icon dropdown-toggle" id="navbarDropdown-6" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="icon-user d-none d-lg-inline-block"></i>
                <span className="d-inline-block d-lg-none">Account</span>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown-6">
                <div className="row gutter-2">
                  <div className="col-12">
                    <fieldset>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-label-group">
                            <input type="text" id="inputName" className="form-control form-control-lg" placeholder="Name" required="" defaultValue={"Dumitru"} />
                            <label htmlFor="inputName">First Name</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-label-group">
                            <input type="text" id="inputSurname" className="form-control form-control-lg" placeholder="Surname" required="" />
                            <label htmlFor="inputSurname">Surname</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="col-12 text-center">
                    <a href="#" className="underline fs-14">Forgot Password ?</a>
                  </div>
                  <div className="col-12">
                    <Link to="/login" className="btn btn-primary btn-block">Sign In</Link>
                    <Link to="/register" className="btn btn-outline-secondary btn-block">Create Account</Link>
                  </div>
                </div>
              </div>
            </li>
            <Favorite/>
            <SingleCart/>
          </ul>
        </div>
    );
}