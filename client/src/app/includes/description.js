import {Link} from "react-router-dom";

function Description({data}){
	return(
	    <section>
	      <div className="container">
	        <div className="row">
	          <div className="col-md-6 col-lg-4">
	            <h3 className="eyebrow text-muted mb-2">Size & Fit</h3>
	            <ul className="list">
	            	<li>Model's height: 183cm/6'0"</li>
	            	<li>Model is wearing: Size Medium</li>
	            </ul>
	          </div>
	          <div className="col-md-6 col-lg-4">
	            <h3 className="eyebrow text-muted mb-2">Details</h3>
	            <ul className="list list--unordered">
	            	<li>{data.category}</li>
	            	<li>Black rubber sole</li>
	            	<li>Metal star and rose shaped studs</li>
	            	<li>Metal studs</li>
	            	<li>Adjustable Velcro straps</li>
	            	<li>Made in Italy</li>
	            </ul>
	          </div>
	          <div className="col-md-6 col-lg-4">
	            <h3 className="eyebrow text-muted mb-2">Shipping</h3>
	            <p>{data.body}</p>
	            <h3 className="eyebrow text-muted my-2">Share this product</h3>
	            <div className="d-block">
	              <ul className="list list--horizontal">
	                <li><Link to="/" className="text-hover-facebook"><i className="fs-28 icon-facebook-square-brands"></i></Link></li>
	                <li><Link to="/" className="text-hover-instagram"><i className="fs-28 icon-instagram-square-brands"></i></Link></li>
	                <li><Link to="/" className="text-hover-twitter"><i className="fs-28 icon-twitter-square-brands"></i></Link></li>
	                <li><Link to="/" className="text-hover-pinterest"><i className="fs-28 icon-pinterest-square-brands"></i></Link></li>
	              </ul>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
    );
}

export default Description;