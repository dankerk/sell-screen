import shoe from '../../assets/images/shoe-temp.png';
import './Product.component.scss';

function Product() {

  return (
    <div className="product">
      <div className="description">
        <img src={shoe} alt="cool shoe" />
        <div>
          <h3 className="title">Product title</h3>
          <p>1234567</p>
        </div>
      </div>
      <div className="price">
        $299,00
      </div>
    </div>
  )
} 

export default Product;