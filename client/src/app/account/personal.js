import React, {Component} from 'react';
import {RequestConsumer}  from "../middleware/request";
import {ProfileConsumer}  from "../main/profile";
import {ErrorConsumer}  from "../helpers/validations";

export default function Personal () {
  return(
    <ProfileConsumer>
    {v => {
      return(
        <form className="tab-pane fade show active" onSubmit={v.personal} id="sidebar-1-3" role="tabpanel" aria-labelledby="sidebar-1-3">
          <div className="row">
            <div className="col">
              <h2>Personal Data</h2>
            </div>
          </div>
          <ErrorConsumer>
            {value => {
              return(
                <value.AuthError state={{"errors": v.errors, "isLoaded": v.isLoaded}}/>
              )
            }}
          </ErrorConsumer>
          <fieldset className="mb-2">
            <div className="row">
              <div className="col-12">
                <div className="form-label-group">
                  <input type="text" className="form-control form-control-lg" name="firstname" value={v.isAuthorised ? v.data[0].name: ''}  placeholder="First Name"/>
                  <label>First Name</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="form-label-group">
                  <input type="text" name="surname" value={v.isAuthorised ? v.data[0].surname: ''} className="form-control form-control-lg" placeholder="Surname"/>
                  <label>Surname</label>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="mb-2">
            <div className="row">
              <div className="col-12">
                <div className="form-label-group">
                  <input type="email" className="form-control form-control-lg" value={v.isAuthorised ? v.data[0].email: ''} name="email" placeholder="Email Address"/>
                  <label>Email Address</label>
                </div>
              </div>
            </div>
          </fieldset>


          <span className="label">Date of birth</span>
          <fieldset className="mb-2">
            <div className="row">
              <div className="col-lg-3">
                <div className="select-frame">
                  <select className="custom-select custom-select-lg" name="day" data-placeholder="Day">
                    <option label="number"></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">...</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="select-frame">
                  <select className="custom-select custom-select-lg" name="month" data-placeholder="Month">
                    <option label="number"></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">...</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="select-frame">
                  <select className="custom-select custom-select-lg" name="year" data-placeholder="Year">
                    <option label="number"></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">...</option>
                  </select>
                </div>
              </div>
            </div>
          </fieldset>

          <div className="row">
            <div className="col-12">
              <span className="label">Gender</span>
            </div>
            <div className="col">
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="men" name="gender" value="men" className="custom-control-input"/>
                <label className="custom-control-label" for="men">Men</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="women" name="gender" value="women" className="custom-control-input"/>
                <label className="custom-control-label" for="women">Women</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </form>
      )
    }}
    </ProfileConsumer>
  )
}