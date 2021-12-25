import React from 'react';
import {Link} from 'react-router-dom';
import {RequestConsumer}  from "../middleware/request";
import Loader from "./loader";

export default function MyCart() {
  document.querySelector("body").classList.add("bg-light");
  var counts = [];
  for (var i = 1; i < 6; i++) {
    counts.push(i);
  }
  return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Shopping Cart</h1>
            </div>
          </div>
          <div className="row gutter-3 gutter-lg-1">
            <RequestConsumer>
              {values => {
                if(!values.isLoaded){
                  return (
                    <div className="col-12 p-5">
                      <Loader value={{position: "relative", backgroundColor: "transparent"}}/>
                    </div>
                  )
                } else if (values.carts.length === 0) {
                  return (
                    <React.Fragment>
                      <div className="col">
                        <div className="bg-white cart-item-list p-5 mb-1 ">
                          <div className="text-center text-base" style={{fontSize: "1.7rem"}}>
                            <i className="icon-shopping-bag text-muted"></i>
                            <p>Your cart is empty </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <a href="#" className="underlined">Continue Shopping</a>
                          </div>
                          <div className="col-md-6 text-right">
                            <a href="javascript:void(0)" className="underlined" onClick={()=> values.update()}><i class="icon-refresh-cw"></i> Update Cart</a>
                          </div>
                        </div>

                      </div>
                      <aside className="col-lg-4">
                        <div className="bg-white p-2 p-lg-3">
                          <h2 className="mb-3 text-uppercase fs-20">Order total</h2>
                          <div className="input-combined mb-2">
                            <input type="text" className="form-control" placeholder="Promo code" aria-label="Promo code" aria-describedby="button-addon2"/>
                            <button className="btn btn-white" type="button" id="button-addon2">Apply</button>
                            <span className="input-combined_indicator"></span>
                          </div>
                          <ul className="list-group list-group-minimal mb-3">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Items
                              <span>$0.00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Shipping
                              <span>$0.00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center text-red">
                              Discount
                              <span className="text-red">-$0.00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center text-uppercase font-weight-bold">
                              Total to pay
                              <span>$0.00</span>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-primary btn-block">Checkout</a>
                        </div>
                      </aside>
                    </React.Fragment>
                  )
                } else {
                  return (
                    <React.Fragment>
                      <div className="col">
                        <div className="bg-white cart-item-list p-2 p-lg-3 mb-1">
                        {
                          values.carts.map((value) => {
                            return (
                              <div className="cart-item" key="value.amount">
                                <Link to={`/product?product=${value.title}&token=${value.p_tok}`} className="cart-item-image"><img src={`assets/images/demo/`+value.image1} alt="Image"/></Link>
                                <div className="cart-item-body">
                                  <div className="row">
                                    <div className="col-10">
                                      <div className="row">
                                        <div className="col-md-6">
                                          <h5 className="cart-item-title">{value.title}</h5>
                                          <ul className="cart-item-meta">
                                            <li><s>${value.discount}</s></li>
                                            <li className="text-red">${value.amount}</li>
                                          </ul>
                                        </div>
                                        <div className="col-md-6">
                                          <ul className="list list--horizontal">
                                            <li className="mr-2">
                                              <div className="dropdown">
                                                <a className="dropdown-toggle" href="#!" role="button" id="dropdown-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  Size <span>{value.sizes}</span>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="dropdown-1">
                                                {
                                                  value.allsizes.split(",").map((a) => {
                                                    return <a className="dropdown-item" key={a} onClick={() => values.changesize(a, value._id.valueOf())} href="javascript:void(0)">{a}</a>
                                                  })
                                                }
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="dropdown">
                                                <a className="dropdown-toggle" href="#" role="button" id="dropdown-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  QTY <span>{value.qty}</span>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="dropdown-2">
                                                {
                                                  counts.map((a) => {
                                                    return <a className="dropdown-item" key={a} href="javascript:void(0)" onClick={() => values.quatity(a, value._id.valueOf())}>{a}</a>
                                                  })
                                                }
                                                </div>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-2 text-right">
                                      <ul className="cart-item-options">
                                        <li><a href="javascript:void(0)" className="icon-x" onClick={() => values.deleteCart(value._id.valueOf())}></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        }
                        </div>


                        <div className="row">
                          <div className="col-md-6">
                            <a href="#" className="underlined">Continue Shopping</a>
                          </div>
                          <div className="col-md-6 text-right">
                            <a href="javascript:void(0)" className="underlined" onClick={()=> values.update()}><i class="icon-refresh-cw"></i> Update Cart</a>
                          </div>
                        </div>

                      </div>
                      <aside className="col-lg-4">
                        <div className="bg-white p-2 p-lg-3">
                          <h2 className="mb-3 text-uppercase fs-20">Order total</h2>
                          <div className="input-combined mb-2">
                            <input type="text" className="form-control" placeholder="Promo code" aria-label="Promo code" aria-describedby="button-addon2"/>
                            <button className="btn btn-white" type="button" id="button-addon2">Apply</button>
                            <span className="input-combined_indicator"></span>
                          </div>
                          <ul className="list-group list-group-minimal mb-3">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Items
                              <span>${values.subTotal}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Shipping
                              <span>${values.Tax}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center text-red">
                              Discount
                              <span className="text-red">-$14.00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center text-uppercase font-weight-bold">
                              Total to pay
                              <span>${values.Total}</span>
                            </li>

                          </ul>
                          <a href="#" className="btn btn-primary btn-block">Checkout</a>
                        </div>
                      </aside>
                    </React.Fragment>
                  )
                }
              }}
            </RequestConsumer>
          </div>
        </div>
      </section>
    );
}