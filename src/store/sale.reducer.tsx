import { SaleItem } from "../components/Cart/Cart.model";

export interface SaleState {
  products: SaleItem[]
}

const initialState: SaleState = {
  products: []
}

export const saleReducer = (state: SaleState = initialState, action: any) => {
  switch (action.type) {
    case 'MADE_SALE':
      return {
        ...state,
        products: action.products
      }
    case 'CLEAR_SALE':
      return {
        ...state,
        products: []
      }
    default:
      return state;
  }
}