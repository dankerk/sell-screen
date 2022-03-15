import { ReactNode, useEffect, useState } from 'react';
import { api } from '../../api/api';
import { Product } from '../../api/models/Product.model';
import Button from '../Button/Button.component';
import ProductComponent from '../Product/Product.component';
import './Product.component.scss';

export interface ProductListComponentProps {
  selectProduct: (product: Product) => void
}

function ProductListComponent(props: ProductListComponentProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    
    api.getProducts({ controller })
      .then((products) => {
        setProducts(products.data);
      })
      .catch(() => {
        setError('Apologies. We\'re unable to load products.')
      });

      return () => {
        controller.abort();
      }
  }, []);

  function getProducts(productList: Product[]): ReactNode | undefined {
    const products = productList.map((product, index) => (
      <button key={index} type="button" onClick={ () => props.selectProduct(product)}>
        <ProductComponent product={product} ></ProductComponent>
      </button>));
    return products.length ? products : undefined;
  }

  function getError(): ReactNode {
    return (<p>{ error }</p>)
  }

  return (
    <>
      <div>{ getProducts(products) || getError() }</div>
      <div className="product-actions">
        <Button onClick={ () => {} }>Create new product</Button>
      </div>
    </>
  )
} 

export default ProductListComponent;