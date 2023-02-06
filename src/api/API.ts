import client from "@/api";
import type { IProductCategory, IProduct } from "@/types";

export default {
  getAuth: () => {
    return client.post("/api/auth").then((response: any) => {
      return response;
    });
  },
  getCategories: () => {
    return client
      .get("/api/categories")
      .then(({ data: { data = [] } = {} }) => {
        return data as IProductCategory[];
      });
  },
  getProducts: () => {
    return client.get("/api/products").then(({ data: { data = [] } = {} }) => {
      return data as IProduct[];
    });
  },
};
