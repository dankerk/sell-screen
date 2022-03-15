import { AxiosResponse } from "axios";
import { Product } from "./models/Product.model";

const axios = require('axios');

const baseUrl = 'http://vend-test-be-server.herokuapp.com'

export type SalesRequestItem = {
  product_id: number,
  quantity: number,
}

export const api = {
  getProducts: ({ controller }: { controller: AbortController }): Promise<AxiosResponse<Product[]>> => axios.get(`${baseUrl}/products`, { signal: controller.signal }),
  sellProducts: (products: SalesRequestItem[]): Promise<AxiosResponse<any>> => axios.post(`${baseUrl}/sales`, products),
}