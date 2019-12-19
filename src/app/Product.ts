export interface Product {
  sku: number;
  name: string;
  type: string;
  price: number;
  upc: string;
  quantity?: number;
  category: Category[];
  shipping: number;
  description: string;
  manufacturer: string;
  model: string;
  url: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
}
