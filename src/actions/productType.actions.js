import { get } from "lodash";
import { productTypeServices } from "../services/product.services";

export const fetchProductTypes = async () => {
  try {
    const response = await productTypeServices.fetchProducts();

    const data = get(response, "data", {});
    return data;
  } catch (error) {
    return {};
  }
};
