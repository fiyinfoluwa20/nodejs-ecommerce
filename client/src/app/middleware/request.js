import React, { Component } from 'react';
import $ from 'jquery';
import { Routes, Route } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const qs = require("qs");
const RequestContext = React.createContext();

class RequestProvider extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded: true,
      login: [],
      register: [],
      dismiss: false,
      carts: [],
      Total: '0.00',
      subTotal: '0.00',
      Tax: 1500,
      favorites: [],
      products: [],
    };
    this.Register = this.RegisterHandler.bind(this);
    this.Login = this.LoginHandler.bind(this);
    this.AddCart = this.AddCartHandler.bind(this);
  }
  componentDidMount() {
    $.ajaxSetup({
      cache: false,
      dataType: "JSON",
      complete: function () {
      }
    });
    this.updateAllCart();
  }

  updateAllCart = (req) =>{
    let $this = this;
    switch(req){
      case "dismiss":
        this.setState(()=> {
          return{dismiss: true};
        })
      default:
        $.ajax({
          url: '/allCart',
          type: "GET",
          success: function(a){
            if (a.data && a.favorite) {
              $this.setState(()=> {
                return {carts: a.data, products: a.products, favorites: a.favorite[0] ? a.favorite[0] : [], Total: a.total > 0 ? a.total + $this.state.Tax : '0.00', subTotal: a.total > 0 ? a.total : '0.00', isLoaded: true};
              });
            }
          }
        });
    }
  }
  AddCartHandler(e){
    e.preventDefault();
    let size = e.target.size.value;
    let token = e.target.token.value;
    var $this = this;
    if (size.trim() == "") {
      alert("Select a size");
      return false;
    }
    this.updateAllCart();
    $.ajax({
      url: '/addCart',
      type: "POST",
      data: qs.stringify({size: size, token: token}),
      success: function(a){
        // console.log(a)
        if (a.error) {
          MySwal.fire({
            html: a.error, 
            showConfirmButton: false,
            icon: 'error',
          })
        } else {
          MySwal.fire({
            html: a.success, 
            showConfirmButton: false,
            icon: 'success',
          })
          $this.updateAllCart();
        }
      }
    });
  }
  deleteCart = (id) => {
    let $this = this;
    MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        closeOnConfirm: true,
        closeOnCancel: true,
        confirmButtonClass: 'btn-success',
        cancelButtonClass: 'btn-danger',
        confirmButtonText: 'Yes, delete it!'
    }).then(function (isConfirmed) {
        if (isConfirmed.isConfirmed) {
          $.ajax({
            url: '/deleteCart',
            type: "POST",
            data: "id=" + id,
            success: function(a){
              if ("success" === a.status) {
                alert("Cart deleted successfully");
                $this.updateAllCart();
              }
            }
          });
        } else {
          Swal.fire({
              title:"Cancelled Successfully", 
              showConfirmButton: false,
              icon: "error"
          });
        }
    });
  }
  addFavorite = (id) => {
    var $this = this;
    $.ajax({
      url: '/addFavorite',
      type: "POST",
      data: "id=" + id,
      success: function(a){
        if (a.status) {
          $this.setState(()=> {
            return {favorites: [a.data], isLoaded: true};
          })
          MySwal.fire({
            html: a.message, 
            showConfirmButton: false,
            icon: 'success',
          })
          $this.updateAllCart();
        } else if(a.error){
          MySwal.fire({
            html: a.message, 
            showConfirmButton: false,
            icon: 'error',
          })
          $this.updateAllCart();
        }
      }
    });
    return false;
  }
  deleteFavorite = (id) => {
    var $this = this;
    MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        closeOnConfirm: true,
        closeOnCancel: true,
        confirmButtonClass: 'btn-success',
        cancelButtonClass: 'btn-danger',
        confirmButtonText: 'Yes, delete it!'
    }).then(function (isConfirmed) {
        if (isConfirmed.isConfirmed) {
          $.ajax({
            url: '/deleteFavorite',
            type: "POST",
            data: "id=" + id,
            success: function(a){
              if (a.status) {
                $this.updateAllCart();
              }
            }
          });
        } else {
          Swal.fire({
              title:"Cancelled Successfully", 
              showConfirmButton: false,
              icon: "error"
          });
        }
    });
    return false;
  }
  changesize = (size, id) => {
    var $this = this;
    $.ajax({
      url: '/size',
      type: "POST",
      data: "size=" + size + "&id=" + id,
      success: function(a){
        if (a.status) {
          $this.updateAllCart();
        }
      }
    });
    return false;
  }
  Quatity = (num, id) => {
    var $this = this;
    $.ajax({
      url: '/quatity',
      type: "POST",
      data: "qty=" + num + "&id=" + id,
      success: function(a){
        if (a.status) {
          $this.updateAllCart();
        }
      }
    });
    return false;
  }
  RegisterHandler(e){
    e.preventDefault();
    var str = {"firstname": e.target.firstname.value.trim(), "email": e.target.email.value.trim(), "password": e.target.password.value.trim(), "passwordC": e.target.passwordC.value.trim()},
    url = e.target.action,
    $this = this;
    $.ajax({
        url: '/register',
        method: 'POST',
        data: str,
        cache: false,
        dataType: "JSON",
        success: function(a){
          console.log(a)
          if (a.length > 0) {
            $this.setState(()=> {
              return {register: [...a], isLoaded: true};
            })
          } else if(a.status){
            window.location.href = '/';
          }else {
            $this.setState(()=> {
              return {isLoaded: false};
            })
          }
        }
    })

  }
  LoginHandler(e){
    e.preventDefault();
    var str = {"email": e.target.email.value.trim(), "password": e.target.password.value.trim()},
    url = e.target.action,
    $this = this;
    $.ajax({
        url: '/login',
        method: 'POST',
        data: qs.stringify(str),
        cache: false,
        dataType: "JSON",
        success: function(a){
          console.log(a)
          if (a && a.length > 0) {
            $this.setState(()=> {
              return {login: [...a], isLoaded: true};
            })
          } else if(a.status){
            window.location.href = '/';
          } else {
            $this.setState(()=> {
              return {isLoaded: false};
            })
          }
        }
    })
  }
  render(){
  	return(
  		<RequestContext.Provider value={{
	        ...this.state,
          Login: this.Login,
          AddCart: this.AddCart,
          quatity: this.Quatity,
          Register: this.Register,
          update: this.updateAllCart,
          deleteCart: this.deleteCart,
          changesize: this.changesize,
          addFavorite: this.addFavorite,
          deleteFavorite: this.deleteFavorite,
        }}>

      {this.props.children}
      </RequestContext.Provider>
  	)
  }
}

function Url(sParam){
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
  }
  return getUrlParameter(sParam); 
}
const RequestConsumer = RequestContext.Consumer;

export {RequestProvider, RequestConsumer, Url };