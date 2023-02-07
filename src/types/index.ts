export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IProductCategory {
  id: string;
  name: string;
  image: string;
}

export interface IProduct {
  id: string;
  name: string;
  featured: string;
  image: string;
  deliveryTime: string;
  minimalOrder: string;
  categories: IProductCategory[];
}
