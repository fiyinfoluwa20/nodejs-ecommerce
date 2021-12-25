import React, {Component} from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import options from "../../data";
import {Link} from 'react-router-dom';
import $ from "jquery";
import {RequestConsumer} from "../middleware/request";
import Loader from "./loader";
import Products from './products';
var option = {
  ...options,
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: { items:  2 },
    768: { items:  2 },
    1200: { items:  2 },
    1600: { items:  1}
  },
}
export default class Carousel extends Component {
  Carousel({state}){
    if (!state.isLoaded || state.products.length < 1) {
      return (
        <React.Fragment>
          <Loader value={{backgroundColor: "transparent", position: "relative", padding: "5rem"}}/>
        </React.Fragment>
      );
    }else {
      return (
        <ReactOwlCarousel className="owl-carousel owl-carousel--mask visible" {...option}>
        <RequestConsumer>
        {v => {
          return( 
            <React.Fragment>
             {state.products.map(a => (
                <div className="card card-product">
                    <figure className="card-image">
                      <a href="javascript:void(0)" onClick={()=> v.addFavorite(a.p_tok)} className="action"><i className="icon-heart"></i></a>
                      <Link to={`/product?product=${a.title}&token=${a.p_tok}`}>
                        <img src={`/assets/images/demo/${a.image1}`} alt="allwell" />
                        <img src={`/assets/images/demo/${a.image2}`} alt="allwell" />
                      </Link>
                    </figure>
                    <a href="javascript:void(0)" className="card-body">
                      <h3 className="card-title">{a.title}</h3>
                      <span className="price">${a.amount}</span>
                    </a>
                </div>
              ))}
            </React.Fragment>
          )
        }}
        </RequestConsumer>
        </ReactOwlCarousel>
      );
    }
  }
  render(){
    return (
      <section className="py-lg-0 no-overflow">
        <div className="container">
          <div className="row align-items-center gutter-1">
            <div className="col-lg-3">
              <div className="pr-lg-5">
                <div className="level-1">
                  <span className="eyebrow text-muted">Hot Products</span>
                  <h2>Top Sellers</h2>
                  <div className="nav nav-tabs flex-lg-column mt-md-3 lavalamp" id="myTab" role="tablist">
                    <a className="nav-item nav-link active" id="women" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Women</a>
                    <a className="nav-item nav-link" id="men" data-toggle="tab" href="#home1" role="tab" aria-controls="home1" aria-selected="true">Men</a>
                    <a className="nav-item nav-link" id="kids" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true">Kids</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row gutter-2 tab-content">

                <RequestConsumer>
                {request=> {
                  return <React.Fragment>
                  <div className="col-12 tab-pane active" id="home" role="tabpanel">
                    <this.Carousel state={{...request}}/>
                  </div>
                  <div className="col-12 tab-pane" id="home1" role="tabpanel">
                    <this.Carousel state={{...request}}/>
                  </div>
                  <div className="col-12 tab-pane" id="home2" role="tabpanel">
                    <this.Carousel state={{...request}}/>
                  </div>
                  </React.Fragment>
                }}
                </RequestConsumer>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}