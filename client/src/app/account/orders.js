export default function Orders(){
	return(
    <div className="tab-pane fade" id="sidebar-1-1" role="tabpanel" aria-labelledby="sidebar-1-1">
      <div className="row">
        <div className="col">
          <h2>Orders</h2>
        </div>
      </div>
      <div className="row gutter-2">
        <div className="col-12">
          <div className="card card-data bordered">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h2 className="card-title fs-18"><a href="#">Order 12339201</a></h2>
                </div>
                <div className="col text-right">
                  <span className="dropdown">
                    <button className="btn btn-lg btn-white btn-ico" id="dropdown-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button"><i className="icon-more-vertical"></i></button>
                    <span className="dropdown-menu" aria-labelledby="dropdown-1">
                      <a className="dropdown-item" href="#!">Action</a>
                      <a className="dropdown-item" href="#!">Another action</a>
                      <a className="dropdown-item" href="#!">Something else here</a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="order-preview">
                <li><a href="product-1.html" title="Fawn Wool / Natural Mammoth Chair" data-toggle="tooltip" data-placement="top"><img src="assets/images/demo/product-1.jpg" alt="Fawn Wool / Natural Mammoth Chair"/></a></li>
                <li><a href="product-1.html" title="Dark Stained NY11 Dining Chair" data-toggle="tooltip" data-placement="top"><img src="assets/images/demo/product-2.jpg" alt="Dark Stained NY11 Dining Chair"/></a></li>
                <li><a href="product-1.html" title="Dark Stained NY11 Dining Chair" data-toggle="tooltip" data-placement="top"><img src="assets/images/demo/product-3.jpg" alt="Dark Stained NY11 Dining Chair"/></a></li>
              </ul>
            </div>
            <div className="card-body">
              <ul className="order-meta">
                <li>
                  <h5 className="order-meta-title">Order #</h5>
                  <span>12339201</span>
                </li>
                <li>
                  <h5 className="order-meta-title">Shipped Date</h5>
                  <span>23 March 2019</span>
                </li>
                <li>
                  <h5 className="order-meta-title">Total</h5>
                  <span>$78.00</span>
                </li>
                <li>
                  <h5 className="order-meta-title">Status</h5>
                  <span className="text-muted">Processing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}