import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { ProductsResponse } from '../../api/models/ProductsResponse.model';
import Button from '../Button/Button.component';
import Product from '../Product/Product.component';
import './Product.component.scss';

function ProductList() {
  const [products, setProducts] = useState<ProductsResponse[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getProducts()
      .then((products) => {
        setProducts(products.data);
      })
      .catch(() => {
        setError('Apologies. We\'re unable to load products.')
      })
  }, []);

  function getProducts() {
    return products.map((product, index) => (<Product product={product} key={index}></Product>));
  }

  function getError() {
    return (<p>{ error }</p>)
  }

  return (
    <>
      <div>{ getProducts() || getError() }</div>
      <div className="product-actions">
        <Button>Create new product</Button>
      </div>
    </>
  )
} 

export default ProductList;