import { createStore, combineReducers } from 'redux';
import { saleReducer, SaleState } from './sale.reducer';

export interface SellSreenStore {
  sale: SaleState,
}

export const store = createStore(combineReducers({ sale: saleReducer }))