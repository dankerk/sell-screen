import Button from '../Button/Button.component';
import Product from '../Product/Product.component';
import './Product.component.scss';

function ProductList() {
  const products = [0,1,2,3,4];

  function getProducts() {
    return products.map(() => (<Product></Product>));
  }

  return (
    <>
    <div>{ getProducts() }</div>
    <div className="product-actions">
      <Button>Create new product</Button>
    </div>
    </>
  )
} 

export default ProductList;