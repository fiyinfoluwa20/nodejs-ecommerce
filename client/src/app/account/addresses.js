export default function Addresses() {
	return(
    
    <div className="tab-pane fade" id="sidebar-1-5" role="tabpanel" aria-labelledby="sidebar-1-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>Addresses</h2>
        </div>
        <div className="col-md-6 text-md-right">
          <a href="#" className="underline"><i className="icon-plus"></i> Add new address</a>
        </div>
      </div>
      <div className="row gutter-2">
        <div className="col-lg-6">
          <div className="card card-data bordered">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-8">
                  <h2 className="card-title eyebrow">Main Delivery Address</h2>
                </div>
                <div className="col text-right">
                  <span className="dropdown">
                    <button className="btn btn-lg btn-white btn-ico" id="dropdown-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button"><i className="icon-more-vertical"></i></button>
                    <span className="dropdown-menu" aria-labelledby="dropdown-5">
                      <a className="dropdown-item" href="#!">Edit</a>
                      <a className="dropdown-item" href="#!">Delete</a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p>
                Jhon Doe <br/>
                1620 East Ayre Str <br/>
                Suite M3115662 <br/>
                Wilmington, DE 19804 <br/>
                United States
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
	)
}