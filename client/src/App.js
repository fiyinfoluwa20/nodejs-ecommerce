import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from "./app/main/index";
import Register from "./app/auth/register";
import Login from "./app/auth/login";
import Cart from "./app/main/cart";
import Product from "./app/main/single-product";
import Profile from "./app/main/profile";
import {RequestProvider, RequestConsumer}  from "./app/middleware/request";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

class App extends Component {
  render(){
    return (
        <React.Fragment>
          <RequestProvider>
          <RequestConsumer>

            {req => {
              if (req.products.length < 1 && !req.dismiss) {
                MySwal.fire({
                  html: "Products request is unable to load", 
                  icon: 'info',
                  showCancelButton: true,
                  toast: true,
                  allowOutsideClick: false,
                  confirmButtonText: 'Refresh'
                }).then((a) => {
                  if (a.isConfirmed) {
                    req.update()
                  }
                  if (a.isDismissed) {
                    req.update("dismiss")
                  }
                })
              }
              if (req.favorites.length < 1 && !req.dismiss) {
                MySwal.fire({
                  html: "Favorites request is unable to load", 
                  icon: 'info',
                  showCancelButton: true,
                  toast: true,
                  allowOutsideClick: false,
                  confirmButtonText: 'Refresh'
                }).then((a) => {
                  if (a.isConfirmed) {
                    req.update()
                  }
                  if (a.isDismissed) {
                    req.update("dismiss")
                  }
                })
              }
            return <Routes>
                    <Route exact path="/" element={<Index/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/product" element={<Product/>} />
                    <Route exact path="/cart" element={<Cart/>} />
                    <Route exact path="/profile" element={<Profile/>} />
                  </Routes>
            }}

            </RequestConsumer>
          </RequestProvider>
        </React.Fragment>
    );
  }
}

export default App;