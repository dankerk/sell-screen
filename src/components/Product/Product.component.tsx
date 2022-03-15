import { ProductsResponse } from '../../api/models/ProductsResponse.model';
import './Product.component.scss';

export interface ProductProps {
  product: ProductsResponse
}

function Product(props: ProductProps) {

  return (
    <div className="product">
      <div className="description">
        <div className="product-image" style={{ backgroundImage: `url('${props.product.picture}')` }}></div>
        <div>
          <h3 className="title">{ props.product.name }</h3>
          <p>{ props.product.sku }</p>
        </div>
      </div>
      <div className="price">
        ${ props.product.price }
      </div>
    </div>
  )
} 

export default Product;