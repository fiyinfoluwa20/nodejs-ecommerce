export default function Category() {
  return (
    <section className="py-1">
      <div className="container-full">
        <div className="row gutter-1">
          <div className="col-md-6">
            <div className="card card-tile">
              <figure className="card-image equal vh-75">
                <span className="image category-image1"></span>
              </figure>
              <div className="card-footer p-lg-5">
                <div className="bg-white d-inline-block p-3">
                  <h2 className="card-title"><span className="d-block text-gray">Feel the summer</span> New Bag 1913</h2>
                  <a href="#" className="underlined">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-tile">
              <figure className="card-image equal vh-75">
                <span className="image category-image2"></span>
              </figure>
              <div className="card-footer p-lg-5">
                <div className="bg-white d-inline-block p-3">
                  <h2 className="card-title"><span className="d-block text-gray">Feel the summer</span> New Collection</h2>
                  <a href="#" className="underlined">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}