import Button, { ButtonSize } from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';
import './Cart.component.scss';

function Cart() {
  const items = [0,1,2,3,4];

  function getCartItems() {
    return items.map(() => (<CartItem></CartItem>));
  }

  return (
    <div className="cart-contents">
      <div className="cart-items">
        { getCartItems() }
      </div>
      <div className="cart-actions">
        <Button size={ButtonSize.large}>
          <div>
            Pay <span>X items</span>
          </div>
          <div>
            $999.99
          </div>
        </Button>
      </div>
    </div>
  )
} 

export default Cart;