import React, {Component} from 'react';
import $ from 'jquery';
import Header2 from "../includes/header-2";
import Orders from "../account/orders";
import Personal from "../account/personal";
import Favorites from "../account/favorites";
import ChangePassword from "../account/changepassword";
import Addresses from "../account/addresses";
import Footer from "../includes/footer";
import {ErrorProvider}  from "../helpers/validations";
const ProfileContext = React.createContext();
const qs = require("qs");

class ProfileProvider extends Component {
	constructor(a){
		super(a)
		this.state = {
			isAuthorised: false,
			isLoaded: false,
			aborted: false,
			errors: [],
			data: {},
		    password: [],
		}
		this.personal = this.Personal.bind(this);
	  this.changePassword = this.ChangePassword.bind(this);
	}
	componentDidMount(){
		this.Profile();
	}
	Profile(){
		let $this = this;
	    $.ajax({
	      url: '/profile',
	      type: "GET",
	      success: function(a){
	        if (a.data) {
	        	$this.setState(()=> {
              return {data: {...a.data}, isAuthorised: true, isLoaded: true};
            })
	        }
	      },
	      error: function(a){
	      	if (a.responseJSON && a.responseJSON.error) {
	        	$this.setState(()=> {
              return {data: {}, isAuthorised: false, isLoaded: false};
            })
            window.location.href = '/';
	      	}
	      }
	    });
	}

  ChangePassword(e){
    e.preventDefault();
    var str = {"password": e.target.password.value.trim(), "newpassword": e.target.newpassword.value.trim(), "passwordConf": e.target.passwordConf.value.trim()},
    $this = this;
	this.Profile();
    $.ajax({
        url: '/changepassword',
        method: 'POST',
        data: qs.stringify(str),
        cache: false,
        dataType: "JSON",
        success: function(a){
          console.log(a)
          if (a.length > 0) {
            $this.setState(()=> {
              return {password: [...a], isLoaded: true};
            })
          } else if(a.status){
            $this.setState(()=> {
              return {password: [], isLoaded: true};
            })
						$this.Profile();
          }
        }
    })
  }

	Personal(e) {
		e.preventDefault();
	    this.Profile();
	    var str = {"name": e.target.firstname.value.trim(), "email": e.target.email.value.trim(), "surname": e.target.surname.value.trim(), "day": e.target.day.value.trim(), "month": e.target.month.value.trim(), "year": e.target.year.value.trim(), "gender": e.target.gender.value.trim()},
	    url = e.target.action,
	    $this = this;
		$.ajax({
	        url: '/personal',
	        method: 'POST',
	        data: str,
	        cache: false,
	        dataType: "JSON",
	        success: function(a){
	          if (a.status) {
	          	$this.setState(()=> {
	              return {errors: [], isAuthorised: true, isLoaded: true};
	            })
					    $this.Profile();
	          } else if (a.length && a.length > 0) {
	          	$this.setState(()=> {
	              return {errors: a, isAuthorised: true, isLoaded: true};
	            })
	          }
	        }
	    })
	}

	render(){
		return(
		    <ProfileContext.Provider value={{
		    	...this.state,
		    	personal: this.personal,
		        changePassword: this.changePassword,
		    }}>
		      {this.props.children}
		    </ProfileContext.Provider>
		)
	}
}

let ProfileConsumer = ProfileContext.Consumer;
export {ProfileProvider, ProfileConsumer}
export default function Profile() {
	return(
		<ProfileProvider>
		<ErrorProvider>
		<ProfileConsumer>
		{value=> {
			return <React.Fragment>
				<Header2/>
			    <section>
			      <div class="container">
			        <div class="row gutter-1 gutter-md-2">
			          <div class="col-lg-4">
			            <aside class="bg-white p-2 p-md-3">
			              <h3 class="fs-20 text-uppercase text-muted mb-2">Welcome, {value.isAuthorised ? value.data[0].name + '!': ''}</h3>
			              <div class="nav nav-menu flex-column lavalamp" id="sidebar-1" role="tablist">
			                <a class="nav-link" data-toggle="tab" href="#sidebar-1-1" role="tab"  aria-controls="sidebar-1" aria-selected="false"><i class="fs-24 icon-box"></i> Orders</a>
			                <a class="nav-link" data-toggle="tab" href="#sidebar-1-2" role="tab" aria-controls="sidebar-1-2" aria-selected="false"><i class="fs-24 icon-heart"></i> Favorites</a>
			                <a class="nav-link active" data-toggle="tab" href="#sidebar-1-3" role="tab" aria-controls="sidebar-1-3" aria-selected="true"><i class="fs-24 icon-user"></i> Personal data </a>
			                <a class="nav-link" data-toggle="tab" href="#sidebar-1-4" role="tab" aria-controls="sidebar-1-4" aria-selected="false"><i class="fs-24 icon-lock"></i> Change password</a>
			                <a class="nav-link" data-toggle="tab" href="#sidebar-1-5" role="tab" aria-controls="sidebar-1-5" aria-selected="false"><i class="fs-24 icon-home"></i> Addresses</a>
			              </div>
			            </aside>
			          </div>
			          <div class="col-lg-8">
			            <div class="bg-white p-2 p-md-3">
			              <div class="tab-content" id="myTabContent">
			                <Orders/>
			                <Personal/>
			                <Favorites/>
			                <ChangePassword/>
			                <Addresses/>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </section>
			    <Footer/>
			</React.Fragment>
		}}
		</ProfileConsumer>
		</ErrorProvider>
		</ProfileProvider>
	)
}