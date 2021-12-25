import {Link,Routes,Route} from 'react-router-dom';
import logo from '../../logo.svg';
import FirstContent from './first-contents';
import SecondContent from './second-contents';
import ThirdContent from './third-contents';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand order-1 order-lg-2"><img src={logo} className="img-fluid" alt="Logo" /></Link>
            <FirstContent />
            <SecondContent />
            <ThirdContent />
          </nav>
        </div>
      </div>
    </header>
    );
}