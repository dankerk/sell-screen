import { useState } from "react";
import { Product } from "../api/models/Product.model";
import CartComponent from "../components/Cart/Cart.component";
import ProductListComponent from "../components/ProductList/ProductList.component";

export default function Products() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  function handleSelectProduct(product: Product): void {
    const isAlreadySelectedProduct = selectedProducts.find((selectedProduct) => selectedProduct.id === product.id);
    if (isAlreadySelectedProduct) {
      return;
    }
    setSelectedProducts([...selectedProducts, product]);
  }

  function handleRemoveProduct(id: number): void {
    const updatedProducts = selectedProducts.filter((product) => product.id !== id)
    setSelectedProducts(updatedProducts);
  }

  return (
    <>
      <div className="products">
        <h1>Products</h1>
        <ProductListComponent selectProduct={ handleSelectProduct }></ProductListComponent>
      </div>
      <div className="cart">
        <CartComponent products={selectedProducts} removeProduct={handleRemoveProduct}></CartComponent>
      </div>
    </>
  );
}