import {Link } from 'react-router-dom';
import $ from "jquery";
import React, {Component} from 'react';
import {RequestConsumer, Url}  from "../middleware/request";
import Breadcrumbs from "../includes/breadcrumbs";
import Description from "../includes/description";
import Related_Products from "../includes/related-products";
import ReactOwlCarousel from 'react-owl-carousel';
import options from "../../data";
import Header from '../includes/header-2';
import Loader from "../includes/loader";
import Footer from '../includes/footer';
import "../../App.css"

var option = {
  ...options,
  nav: true,
  loop: true,
}
export default class Product extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      product: []
    };
  }
  componentDidMount(){
    var $this = this;
    let param1 = Url("product") || "",
     param2 = Url("token") || "";
    $.ajax({
      url: `/single/title/${param1}/token/${param2}`,
      type: "GET",
      success: function(a){
        if (a) {
          $this.setState(()=> {
            return {product: a.data, isLoaded: true}
          })
        }
      }
    });
  }
  render(){
    if (!this.state.isLoaded) {
      return (
        <React.Fragment>
          <Header/>
          <Loader/>
          <Footer/>
        </React.Fragment>
      );
    } else if(!this.state.product || this.state.product.length < 1){
      window.location.href = '/';
    } else {
      return (
        <React.Fragment>
          <Header/>
          <Breadcrumbs/>
          <section className="no-overflow py-lg-0" style={{backgroundColor: "#EFEFEF"}}>
            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-lg-start position-relative" id="owlCarouselParent">
                <div id="nav-1" className="owl-external-nav"></div>

                <div className="col-md-6 col-lg-4">
                  <ReactOwlCarousel className="owl-carousel owl-carousel--slide gallery visible" {...option} data-id="#nav-1">
                    <figure>
                      <a href="assets/images/demo/product-carousel-1.jpg"><img src={`assets/images/demo/`+this.state.product.image1} alt="Image"/></a>
                    </figure>
                    <figure>
                      <a href="assets/images/demo/product-carousel-1-2.jpg"><img src={`assets/images/demo/`+this.state.product.image2} alt="Image"/></a>
                    </figure>
                    <figure>
                      <a href="assets/images/demo/product-carousel-1-3.jpg"><img src={`assets/images/demo/`+this.state.product.image3} alt="Image"/></a>
                    </figure>
                    <figure>
                      <a href="assets/images/demo/product-carousel-1-4.jpg"><img src={`assets/images/demo/`+this.state.product.image1} alt="Image"/></a>
                    </figure>
                  </ReactOwlCarousel>
                </div>

                <div className="col-md-8 col-lg-4 level-1">
                  <RequestConsumer>
                      {value => {
                        return(
                          <form onSubmit={value.AddCart}>
                            <input type="hidden" name="token" value={this.state.product.p_tok}/>
                            <div className="col-12 text-center">
                              <span className="eyebrow text-muted">{this.state.product.category}</span>
                              <h1>{this.state.product.title}</h1>
                              <span className="price fs-18">${this.state.product.amount}</span>
                            </div>
                            <div className="col-12">
                              <div className="select-frame">
                                <select className="custom-select custom-select-lg mb-2 text-dark" style={{cursor: "pointer"}} name="size" placeholder="Select size">
                                  <option value="">size</option>
                                  {
                                   this.state.product && this.state.product.sizes.split(",").map((a, b)=> {
                                      return <option key={b} value={a}>{a}</option>;
                                    })
                                  }
                                </select>
                              </div>
                              <div className="row align-items-center mt-1">
                                <div className="col">
                                  <small className="text-muted">Product code: <span className="text-dark">{this.state.product.sku}</span></small>
                                </div>
                                <div className="col text-right">
                                  <a href="#" className="underline fs-14">Size Guide</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 text-center">
                              <button className="btn btn-block btn-primary mb-2" type="submit"> <i className="icon-shopping-cart mr-2"></i>Add to bag</button>
                                <a href="javascript:void(0)" onClick={()=> value.addFavorite(this.state.product.p_tok)} className="btn btn-outline-primary btn-ico btn-circle"><i className="icon-heart"></i></a>
                            </div>
                          </form>
                        );
                      }
                    }
                  </RequestConsumer>
                </div>
              </div>
            </div>
          </section>
          <Description data={this.state.product} />
          <Related_Products/>
          <Footer/>
        </React.Fragment>
      );
    }
  }

}