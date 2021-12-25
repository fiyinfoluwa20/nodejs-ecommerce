import ReactOwlCarousel from 'react-owl-carousel';
import options from "../../data";
var option = {
  ...options,
  nav: true,
  loop: true,
  margin : 50,
  responsive: {
    0: { items:  1 },
    768: { items:  2 },
    1200: { items:  3 },
    1600: { items:  3}
  }
}
export default function TopHeader() {
  return (
        <div className="py-1 bg-dark">
          <div className="container">
            <div className="row">
              <div className="col">
                <ReactOwlCarousel {...option} className="owl-carousel owl-carousel-promo">
                  <h6 className="fs-14 text-uppercase text-center text-white m-0"><i className="icon-truck mr-1 text-opaque"></i> Free Shipping and Returns</h6>
                  <h6 className="fs-14 text-uppercase text-center text-white m-0"><i className="icon-award mr-1 text-opaque"></i> 2 Years of Warranty</h6>
                  <h6 className="fs-14 text-uppercase text-center text-white m-0"><i className="icon-shield mr-1 text-opaque"></i> 30 Days Moneyback Guarantee</h6>
                </ReactOwlCarousel>
              </div>
            </div>
          </div>
        </div>
    );
}