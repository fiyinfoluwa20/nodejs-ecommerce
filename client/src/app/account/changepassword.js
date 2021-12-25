import React from 'react';
import { Link } from 'react-router-dom';
import {ProfileConsumer}  from "../main/profile";
import {ErrorConsumer}  from "../helpers/validations";

export default function ChangePassword() {
	return(
    <React.Fragment>
    <ProfileConsumer>
    {value => {
      return(
        <form class="tab-pane fade" onSubmit={value.changePassword} id="sidebar-1-4" role="tabpanel" aria-labelledby="sidebar-1-4">
          <div class="row">
            <div class="col">
              <h2>Change Password</h2>
            </div>
          </div>
          <ErrorConsumer>
          {v => {
            return(
               <v.AuthError state={{"errors": value.password, "isLoaded": value.isLoaded}}/>
            )
          }}
          </ErrorConsumer>
          <fieldset class="mb-2">
            <div class="row">
              <div class="col-12">
                <div class="form-label-group">
                  <input type="password" name="password" id="inputPassword" class="form-control form-control-lg" placeholder="Current Password"/>
                  <label htmlFor="inputPassword">Current Password</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="form-label-group">
                  <input type="password" name="newpassword" id="inputPassword2" class="form-control form-control-lg" placeholder="New Password"/>
                  <label htmlFor="inputPassword2">New Password</label>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="mb-2">
            <div class="row">
              <div class="col-12">
                <div class="form-label-group">
                  <input type="password" name="passwordConf" id="inputPassword2" class="form-control form-control-lg" placeholder="Confirm New Password"/>
                  <label htmlFor="inputPassword2">Confirm New Password</label>
                </div>
              </div>
            </div>
          </fieldset>

          <div class="row">
            <div class="col">
              <button type="submit" class="btn btn-primary">Save Password</button>
            </div>
          </div>
        </form>
      )
    }}
    </ProfileConsumer>
    </React.Fragment>
	)
}