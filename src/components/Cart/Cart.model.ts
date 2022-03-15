import { Product } from "../../api/models/Product.model";

export interface SaleItem extends Product {
  quantity: number,
  totalPrice: number
}