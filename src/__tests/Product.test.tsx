import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Product from "../components/Product";
import products from "../data.json";

const renderProductCard = () => {
  return render(
    <Provider store={store}>
      <Product product={products.products[0]} />
    </Provider>
  );
};

describe("<Product />", () => {
  describe("Teasing product component with no props", () => {
    render(
      <Provider store={store}>
        <Product product={undefined} />
      </Provider>
    );
    test("render product component with product undefined or null", async () => {
      expect(await screen.queryByRole("product-item")).not.toBeInTheDocument();
    });
  });

  describe("Teasing product component with product", () => {
    beforeEach(() => {
      act(() => {
        renderProductCard();
      });
    });

    test("render product component with product", async () => {
      expect(await screen.findByRole("product-item")).toBeInTheDocument();
    });

    test("render product card detail with product title", async () => {
      expect(await screen.findByText(products.products[0].title)).toBeInTheDocument();
    });

    test("render product card detail with primary tag", async () => {
      expect(await screen.findByText(products.products[0].primaryTag[0])).toBeInTheDocument();
    });

    test("render product card detail with secondary tag", async () => {
      expect(await screen.findByText(products.products[0].secondaryTag[0])).toBeInTheDocument();
    });
  });
});
