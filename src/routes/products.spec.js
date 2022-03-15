import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { api } from "../api/api";
import App from "../App";

describe('the products route', () => {
  
  // Something wrong is not right...
  // All useful testing kinda ends with not being able to mock the api responses.

  it('should fetch and display products', () => {
    const productsMock = [{"id":1,"name":"Bed","sku":"BE000000-0000-0000-0000-000000000001","picture":"https://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy-tumblr.gif","price":1499.9}];
    jest.spyOn(api, "getProducts").mockImplementation(() => Promise.resolve({ data: productsMock }))
    render(<App />, {wrapper: MemoryRouter})

    const products = screen.getAllByTestId('product');

    expect(products.length).toBe(1);
  });
})