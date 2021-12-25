export default function Breadcrumbs() {
	return(
	    <section className="breadcrumbs" style={{background: "#EFEFEF"}}>
	      <div className="container">
	        <div className="row">
	          <div className="col">
	            <nav aria-label="breadcrumb">
	              <ol className="breadcrumb">
	                <li className="breadcrumb-item"><a href="#!">Home</a></li>
	                <li className="breadcrumb-item"><a href="#!">Women</a></li>
	                <li className="breadcrumb-item active" aria-current="page">Shoes</li>
	              </ol>
	            </nav>
	          </div>
	        </div>
	      </div>
	    </section>
		);
}