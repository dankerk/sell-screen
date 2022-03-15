import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import { Product } from '../../api/models/Product.model';
import Button, { ButtonSize } from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';
import './Cart.component.scss';
import { SaleItem } from './Cart.model';

export interface CartProps {
  products: Product[],
  removeProduct: (id: number) => void,
}

function CartComponent(props: CartProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [saleItems, setSaleItems] = useState<SaleItem[]>([])

  useEffect(() => {
    setSaleItems(props.products.map(getSaleItemFromProduct))
  }, [props.products])


  function getSaleItemFromProduct(product: Product): SaleItem {
    return { ...product, quantity: 1, totalPrice: product.price }
  }

  function getTotalPrice(): number {
    return Math.round(saleItems.reduce((acc, curr) => {
      return acc = acc + curr.totalPrice;
    }, 0) * 100) / 100;
  }

  function getCartItems() {
    return saleItems.map((saleItem, index) => (<CartItem quantityChange={ handleQuantityChange } removeProduct={ props.removeProduct } saleItem={saleItem} key={index}></CartItem>));
  }

  function handleQuantityChange(saleItem: SaleItem): void {
    const updatedSaleItems = saleItems.map((item) => item.id !== saleItem.id ? item : saleItem);
    setSaleItems(updatedSaleItems);
  }

  async function makeSale() {
    try {
      const request = saleItems.map((item) => ({ product_id: item.id, quantity: item.quantity }))
      await api.sellProducts(request).then((response) => {
        dispatch({ type: 'MADE_SALE', products: response.data});
        navigate("/summary", { replace: true });
      })
    } catch {
      // add some nice error handling here
    }
  }

  return (
    <div className="cart-contents">
      <div className="cart-items">
        { getCartItems() }
      </div>
      <div className="cart-actions">
        <Button onClick={ () => makeSale() } size={ButtonSize.large}>
          <div>
            Pay <span>{ saleItems.length } items</span>
          </div>
          <div>
            ${ getTotalPrice() }
          </div>
        </Button>
      </div>
    </div>
  )
} 

export default CartComponent;