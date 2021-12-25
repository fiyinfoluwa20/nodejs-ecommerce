import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ReactOwlCarousel from 'react-owl-carousel';
import {RequestConsumer, Url}  from "../middleware/request";
import options from "../../data";
import Product from "../main/single-product";
import Products from './products';
import Loader from "./loader";

var option = {
  ...options,
  nav: true,
  loop: true,
  margin: 10,
  responsive: {
    0: { items: 1},
    768: { items: 2},
    1200: { items: 3},
    1600: { items: 4}
  }
}


export default class Related_Products extends Component{
  render(){
    return (
      <section className="no-overflow">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Recently viewed</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <RequestConsumer>
              {request=> {
                if (!request.isLoaded) {
                  return <Loader value={{backgroundColor: "transparent", position: "relative", padding: "5rem"}}/>
                } else {
                  return (
                    <React.Fragment>
                      <ReactOwlCarousel className="owl-carousel visible" {...option}>
                      {request.products.map((a) => {
                        return (
                          <div className="card card-product" key={a.p_tok}>
                            <figure className="card-image">
                              <a href="javascript:void(0)" className="action" onClick={() => request.addFavorite(a.id)}><i className="icon-heart"></i></a>
                              <Link to={`/product?product=${a.title}&token=${a.p_tok}`} target="__blank">
                                <img src={`assets/images/demo/`+a.image1} alt="Image"/>
                                <img src={`assets/images/demo/`+a.image2} alt="Image"/>
                              </Link>
                            </figure>
                            <Link to="#" className="card-body">
                              <h3 className="card-title">{a.title}</h3>
                              <span className="price">${a.amount}</span>
                            </Link>
                          </div>
                        )
                      })}
                      </ReactOwlCarousel>
                    </React.Fragment>
                  );
                }
              }}
              </RequestConsumer>
            </div>
          </div>
        </div>
      </section>
    )
  }
}