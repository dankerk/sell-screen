import { AxiosResponse } from "axios";
import { ProductsResponse } from "./models/ProductsResponse.model";

const axios = require('axios');

const baseUrl = 'http://vend-test-be-server.herokuapp.com'

export const api = {
  getProducts: (): Promise<AxiosResponse<ProductsResponse[]>> => axios.get(`${baseUrl}/products`),
}