import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from "jquery";
import Loader from "./loader";
import {RequestConsumer}  from "../middleware/request";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default class Products extends Component{
  Product({state}){
    if (!state.isLoaded || state.products.length < 1) {
      return (
        <React.Fragment>
          <Loader value={{backgroundColor: "transparent", position: "relative", padding: "5rem"}}/>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {state.products.map(a => (
            <div className="col-6 col-lg-3" key={a.p_tok}>
              <Link to={`/product?product=${a.title}&token=${a.p_tok}`}>
                <figure className="category category--alt">
                  <div className="equal"><span className="image" style={{backgroundImage: `url(/assets/images/demo/${a.image1})`}} ></span></div>
                  <figcaption>{a.title}</figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </React.Fragment>
      );
    }
  }
  render(){
    return(
    <React.Fragment>
    <RequestConsumer>
      {request=> {
       return <section>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-8 col-md-6">
                <span className="eyebrow text-muted">Shop by category</span>
                <h2>Trending Categories</h2>
              </div>
              <div className="col-4 col-md-6 text-right">
                <a href="#" className="underlined">View More</a>
              </div>
            </div>
            <div className="row gutter-1">
              <this.Product state={{...request}} />
            </div>
          </div>
        </section>
      }}
      </RequestConsumer>
      </React.Fragment>
    )
  }
}