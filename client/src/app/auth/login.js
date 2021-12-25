import { Link } from 'react-router-dom';
import {RequestConsumer}  from "../middleware/request";
import {ErrorProvider,ErrorConsumer}  from "../helpers/validations";

export default function Login(){
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card boxed">
              <div className="card-header">
                <ul className="nav nav-tabs nav-fill card-header-tabs">
                  <li className="nav-item">
                    <span className="nav-link">Log In</span>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <ErrorProvider>
                    <RequestConsumer>
                    {v => {
                      return (
                        <form onSubmit={v.Login} className="row gutter-2">
                          <div class="col-12">
                            <ErrorConsumer>
                            {value => {
                              return(
                                 <value.AuthError state={{"errors": v.login, "isLoaded": v.isLoaded}}/>
                              )
                            }}
                            </ErrorConsumer>
                            <fieldset>
                              <div class="row">
                                <div class="col-12">
                                  <div class="form-label-group">
                                    <input type="email" id="loginemail" name="email" class="form-control form-control-lg" placeholder="Email address"/>
                                    <label for="loginemail">Email address</label>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-12">
                                  <div class="form-label-group">
                                    <input type="password" id="loginpassword" name="password" class="form-control form-control-lg" placeholder="Password"/>
                                    <label for="loginpassword">Password</label>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                          <div class="col-12 text-center">
                            <a href="#" class="underline fs-14">Forgot Password ?</a>
                          </div>
                          <div class="col-12">
                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                          </div>
                            <p> If you are not yet a member no problem kindly <Link className="text-danger" to="/register">Register</Link> here</p>
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
