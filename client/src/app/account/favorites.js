import React from 'react';
import { Link } from 'react-router-dom';
import Loader from "../includes/loader";
import {RequestConsumer}  from "../middleware/request";

function Favorite({v}) {
  // console.log(v)
  // return "he;"
  if (!v.isLoaded) {
    return (
        <React.Fragment>
          <Loader value={{backgroundColor: "transparent", position: "relative", padding: "5rem"}}/>
        </React.Fragment>
      );
  } else {
    return (
      <React.Fragment>
        {v.favorites.map((a) => {
          return(
            <form onSubmit={v.AddCart} className="col-md-6">
              <input type="hidden" name="token" value={a.p_tok}/>
              <div className="card card-product">
                <figure className="card-image">
                  <a href="javascript:void(0)" className="action" onClick={() => v.deleteFavorite(a._id.valueOf())}><i className="icon-x"></i></a>
                  <Link to={`/product?product=${a.title}&token=${a.p_tok}`}>
                    <img src={`assets/images/demo/`+a.image1} alt="Image"/>
                    <img src={`assets/images/demo/`+a.image2} alt="Image"/>
                  </Link>
                </figure>
                <div className="card-footer">
                  <h3 className="card-title"><a href="#">{a.title}</a></h3>
                  <span className="price">${a.amount}</span>
                </div>
              </div>
              <fieldset className="my-1">
                <div className="row">
                  <div className="col-12">
                    <div className="select-frame">
                      <select className="custom-select custom-select-lg" name="size" id="custom-select-1-2" data-placeholder="Size">
                        <option label="size"></option>
                        {
                          a.sizes.split(",").map((a, b)=> {
                            return <option key={b} value={a}>{a}</option>;
                          })
                        }
                      </select>
                    </div>
                  </div>
                </div>
              </fieldset>
              <button type="submit" className="btn btn-block btn-primary">Add to Bag</button>
            </form>
          )
        })}
      </React.Fragment>
    )
  }
}
export default function Favorites() {
	return(
        <div className="tab-pane fade" id="sidebar-1-2" role="tabpanel" aria-labelledby="sidebar-1-2">
          <div className="row align-items-end">
            <div className="col">
              <h2>Favourites</h2>
            </div>
            <div className="col text-right">
              <a href="#" className="underline"><i className="icon-plus"></i> add all to bag</a>
            </div>
          </div>
          <div className="row gutter-2">
            <RequestConsumer>
            {v => {
              if (!v.isLoaded) {
                return (
                    <React.Fragment>
                      <Loader value={{backgroundColor: "transparent", position: "relative", padding: "5rem"}}/>
                    </React.Fragment>
                  );
              } else if (v.favorites.length == 0 ) {
                return (
                  <div className="col-12">
                    <div className="text-center text-base m-5 p-5" style={{fontSize: "2rem"}}>
                      <i className="icon-shopping-bag text-muted" style={{fontSize: "3rem"}}></i>
                      <p>Your Favorite is empty </p>
                    </div>
                  </div>
                )
              }else {
                return (
                  <React.Fragment>
                    {v.favorites.map((a) => {
                      return(
                        <form onSubmit={v.AddCart} className="col-md-6">
                          <input type="hidden" name="token" value={a.p_tok}/>
                          <div className="card card-product">
                            <figure className="card-image">
                              <a href="javascript:void(0)" className="action" onClick={() => v.deleteFavorite(a._id.valueOf())}><i className="icon-x"></i></a>
                              <Link to={`/product?product=${a.title}&token=${a.p_tok}`}>
                                <img src={`assets/images/demo/`+a.image1} alt="Image"/>
                                <img src={`assets/images/demo/`+a.image2} alt="Image"/>
                              </Link>
                            </figure>
                            <div className="card-footer">
                              <h3 className="card-title"><a href="#">{a.title}</a></h3>
                              <span className="price">${a.amount}</span>
                            </div>
                          </div>
                          <fieldset className="my-1">
                            <div className="row">
                              <div className="col-12">
                                <div className="select-frame">
                                  <select className="custom-select custom-select-lg" name="size" id="custom-select-1-2" data-placeholder="Size">
                                    <option label="size"></option>
                                    {
                                      a.sizes.split(",").map((a, b)=> {
                                        return <option key={b} value={a}>{a}</option>;
                                      })
                                    }
                                  </select>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <button type="submit" className="btn btn-block btn-primary">Add to Bag</button>
                        </form>
                      )
                    })}
                  </React.Fragment>
                )
              }
            }}
            </RequestConsumer>

          </div>
        </div>
	)
}