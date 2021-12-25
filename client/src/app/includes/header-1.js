import {Link,Routes,Route} from 'react-router-dom';
import logo from '../../logo.svg';
import TopHeader from './top-header';
import FirstContent from './first-contents';
import SecondContent from './second-contents';
import ThirdContent from './third-contents';

export default function Header1() {
  return (
      <header className="header header-absolute">
        <Routes>
          <Route path="/" element={<TopHeader/>} />
        </Routes>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand order-1 order-lg-2"><img src={logo} className="img-fluid" alt="Logo" /></Link>
              <FirstContent />
              <SecondContent/>
              <ThirdContent/>
            </nav>
          </div>
        </div>
      </header>
    );
}