import logo from '../../assets/images/vend-logo.png';
import './Header.component.scss';

function Component() {

  return (
    <header className="sell-screen-header" data-testid="header">
      <div>
        <img src={logo} alt="Vend Sell Screen Logo" />
        <div>
          <p>Jacky Lee</p>
        </div>
      </div>
    </header>
  )
} 

export default Component;