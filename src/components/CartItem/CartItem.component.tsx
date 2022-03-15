import trash from '../../assets/images/trash.svg';
import Button, { ButtonColor, ButtonSize } from '../Button/Button.component';
import './CartItem.component.scss';

function CartItem() {

  return (
    <div className="cart-item">
      <div>
        <input type="number"></input>
        <p>Some awesome pair of shoe</p>
      </div>
      <div>
        <p>$200,20</p>
        <Button color={ButtonColor.red} size={ButtonSize.small}><img src={ trash } alt="remove" /></Button>
      </div>
    </div>
  )
} 

export default CartItem;