import logo from '../../assets/images/vend-logo.png';
import './Header.component.scss';

function Header() {

  return (
    <header className="sell-screen-header">
      <div>
        <img src={logo} alt="Vend Sell Screen Logo" />
        <div>
          <p>Jacky Lee</p>
        </div>
      </div>
    </header>
  )
} 

export default Header;