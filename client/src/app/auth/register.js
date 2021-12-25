import { Link } from 'react-router-dom';
import {RequestConsumer}  from "../middleware/request";
import {ErrorProvider,ErrorConsumer}  from "../helpers/validations";


export default function Register(){
  return (

    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card boxed">
              <div className="card-header">
                <ul className="nav nav-tabs nav-fill card-header-tabs">
                  <li className="nav-item">
                    <span className="nav-link">Sign Up</span>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <ErrorProvider>
                    <RequestConsumer>
                    {v => {
                      return (
                        <form onSubmit={v.Register} className="row gutter-2">
                            <div className="col-12">
                              <ErrorConsumer>
                              {value => {
                                return(
                                  <value.AuthError state={{"errors": v.register, "isLoaded": v.isLoaded}}/>
                                )
                              }}
                              </ErrorConsumer>

                              <fieldset>
                                  <div className="row">
                                    <div className="col-12">
                                      <div className="form-label-group">
                                        <input type="text" id="inputName2" name="firstname" className="form-control form-control-lg" placeholder="First name" />
                                        <label htmlFor="inputName2">First name</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12">
                                      <div className="form-label-group">
                                        <input type="email" id="inputEmail2" name="email" className="form-control form-control-lg" placeholder="Email" />
                                        <label htmlFor="inputEmail2">Email</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12">
                                      <div className="form-label-group">
                                        <input type="password" id="inputPassword2" name="password" className="form-control form-control-lg" placeholder="Password" />
                                        <label htmlFor="inputPassword2">Password</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12">
                                      <div className="form-label-group">
                                        <input type="password" id="inputPassword3" name="passwordC" className="form-control form-control-lg" placeholder="Confirm Password" />
                                        <label htmlFor="inputPassword3">Confirm Password</label>
                                      </div>
                                    </div>
                                  </div>
                              </fieldset>
                            </div>

                            <div className="col-12">
                              <button type="submit" className="btn btn-primary btn-block">Create an account</button>
                            </div>
                            <p> If you already have an account <Link className="text-danger" to="/login">Login</Link> here</p>

                        </form>
                      )
                    }}
                    </RequestConsumer>
                  </ErrorProvider>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
