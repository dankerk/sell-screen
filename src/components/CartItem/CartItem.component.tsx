import { ChangeEvent, useEffect, useState } from 'react';
import trash from '../../assets/images/trash.svg';
import Button, { ButtonColor, ButtonSize } from '../Button/Button.component';
import { SaleItem } from '../Cart/Cart.model';
import './CartItem.component.scss';

export interface CartItemProps {
  saleItem: SaleItem,
  removeProduct: (id: number) => void,
  quantityChange: (product: SaleItem) => void,
}


function CartItem(props: CartItemProps) {
  const [quantity, setQuantity] = useState<number>(1)

  useEffect(() => {
    setQuantity(props.saleItem.quantity);
  }, [props.saleItem.quantity])

  function updateQuantity(event: ChangeEvent<HTMLInputElement>) {
    const quantity = Number(event?.target.value);
    if (quantity <= 0) {
      return;
    }

    props.quantityChange({ ...props.saleItem, quantity, totalPrice: quantity * props.saleItem.price });
  }

  return (
    <div className="cart-item">
      <div>
        <input type="number" onChange={updateQuantity} value={ quantity }></input>
        <p>{ props.saleItem.name }</p>
      </div>
      <div>
        <p>${ props.saleItem.price }</p>
        <Button onClick={ () => props.removeProduct(props.saleItem.id) } color={ButtonColor.red} size={ButtonSize.small}><img src={ trash } alt="remove" /></Button>
      </div>
    </div>
  )
} 

export default CartItem;